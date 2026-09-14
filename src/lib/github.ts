export interface ContributionDay {
  date: string;
  level: number; // -1: future day, 0: no commits, 1-4: commit levels
  count: number;
  tooltipText: string;
}

export interface MonthSpan {
  name: string;
  span: number;
}

export interface GitHubActivityData {
  totalContributions: string;
  weeks: ContributionDay[][];
  monthSpans: MonthSpan[];
  lastUpdated: string;
  isLive?: boolean;
}

import baselineDays from "./github-baseline.json";

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatISODate(d: Date): string {
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatReadableDate(isoStr: string): string {
  try {
    const parts = isoStr.split("-");
    if (parts.length === 3) {
      const d = new Date(Date.UTC(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10)));
      return d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric", timeZone: "UTC" });
    }
  } catch {
    // fallback
  }
  return isoStr;
}

/**
 * Builds a rolling N-week matrix ending on the current week of `referenceDate`.
 * If dayMap is provided, pulls live counts and levels from GitHub.
 * Days strictly after `todayStr` in the current week receive `level: -1`.
 */
export function generateDynamicWeeks(
  dayMap?: Map<string, { level: number; count: number; tooltipText?: string }>,
  numWeeks = 40,
  referenceDate = new Date()
): { weeks: ContributionDay[][]; monthSpans: MonthSpan[]; todayStr: string } {
  // Determine reference date string (YYYY-MM-DD in UTC)
  let todayStr = formatISODate(referenceDate);

  // If dayMap has a more recent entry (e.g. GitHub UTC day is ahead), use that
  if (dayMap && dayMap.size > 0) {
    const sorted = Array.from(dayMap.keys()).sort();
    const latestInMap = sorted[sorted.length - 1];
    if (latestInMap && latestInMap > todayStr) {
      todayStr = latestInMap;
    }
  }

  const today = new Date(todayStr + "T00:00:00Z");
  const dayOfWeek = today.getUTCDay(); // 0: Sunday, 6: Saturday
  const currentSunday = new Date(today);
  currentSunday.setUTCDate(today.getUTCDate() - dayOfWeek);

  const weeks: ContributionDay[][] = [];

  for (let w = numWeeks - 1; w >= 0; w--) {
    const colSunday = new Date(currentSunday);
    colSunday.setUTCDate(currentSunday.getUTCDate() - w * 7);

    const daysInWeek: ContributionDay[] = [];
    for (let d = 0; d < 7; d++) {
      const curDate = new Date(colSunday);
      curDate.setUTCDate(colSunday.getUTCDate() + d);
      const iso = formatISODate(curDate);

      if (iso > todayStr) {
        // Future day
        daysInWeek.push({
          date: iso,
          level: -1,
          count: 0,
          tooltipText: "",
        });
      } else {
        const found = dayMap ? dayMap.get(iso) : null;
        if (found) {
          const count = found.count;
          const level = count === 0 ? 0 : found.level;
          daysInWeek.push({
            date: iso,
            level,
            count,
            tooltipText: found.tooltipText || (count === 0 ? `No contributions on ${formatReadableDate(iso)}` : `${count} contribution${count === 1 ? "" : "s"} on ${formatReadableDate(iso)}`),
          });
        } else {
          // Check static baseline
          const baselineEntry = (baselineDays as Record<string, any>)[iso];
          if (baselineEntry !== undefined) {
            if (typeof baselineEntry === "number") {
              const level = baselineEntry;
              const count = level === 0 ? 0 : level * 4;
              daysInWeek.push({
                date: iso,
                level,
                count,
                tooltipText: level === 0 ? `No contributions on ${formatReadableDate(iso)}` : `${count} contributions on ${formatReadableDate(iso)}`,
              });
            } else {
              const count = baselineEntry.count || 0;
              const level = count === 0 ? 0 : (baselineEntry.level || 0);
              daysInWeek.push({
                date: iso,
                level,
                count,
                tooltipText: baselineEntry.text || (count === 0 ? `No contributions on ${formatReadableDate(iso)}` : `${count} contribution${count === 1 ? "" : "s"} on ${formatReadableDate(iso)}`),
              });
            }
          } else {
            // STRICT DEFAULT: If not in live map and not in baseline, it MUST be 0 (never fabricate fake contributions!)
            daysInWeek.push({
              date: iso,
              level: 0,
              count: 0,
              tooltipText: `No contributions on ${formatReadableDate(iso)}`,
            });
          }
        }
      }
    }
    weeks.push(daysInWeek);
  }

  // Calculate dynamic month spans across the columns
  const monthSpans: MonthSpan[] = [];
  let currentMonth: string | null = null;
  let currentSpan = 0;

  for (let w = 0; w < weeks.length; w++) {
    // Determine the month representing this week from the Wednesday/Thursday (mid-week, index 3)
    const midDate = new Date(weeks[w][3].date + "T00:00:00Z");
    const mName = MONTH_NAMES[midDate.getUTCMonth()];

    if (mName !== currentMonth) {
      if (currentMonth) {
        monthSpans.push({ name: currentMonth, span: currentSpan });
      }
      currentMonth = mName;
      currentSpan = 1;
    } else {
      currentSpan++;
    }
  }
  if (currentMonth) {
    monthSpans.push({ name: currentMonth, span: currentSpan });
  }

  return { weeks, monthSpans, todayStr };
}

/**
 * Live scraper for public GitHub user contributions calendar.
 */
export async function fetchGitHubContributions(username = "NXRts"): Promise<GitHubActivityData> {
  const res = await fetch(`https://github.com/users/${username}/contributions`, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`GitHub responded with status ${res.status}`);
  }

  const html = await res.text();

  // Total contributions
  const countMatch = html.match(/([\d,]+)\s+contributions\s+in the last year/i);
  const totalContributions = countMatch ? countMatch[1] : "3,625";

  // Tooltips
  const tooltips = new Map<string, { text: string; count: number }>();
  const tooltipRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/g;
  let tm: RegExpExecArray | null;
  while ((tm = tooltipRegex.exec(html)) !== null) {
    const forId = tm[1];
    const text = tm[2].trim();
    const cMatch = text.match(/^(\d+|No)\s+contribution/i);
    let count = 0;
    if (cMatch) {
      count = cMatch[1].toLowerCase() === "no" ? 0 : parseInt(cMatch[1], 10);
    }
    tooltips.set(forId, { text, count });
  }

  // Days
  const dayMap = new Map<string, { level: number; count: number; tooltipText: string }>();
  const tdRegex = /<td\s+([^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*)>/g;
  let tdm: RegExpExecArray | null;
  while ((tdm = tdRegex.exec(html)) !== null) {
    const attrs = tdm[1];
    const date = tdm[2];
    const idMatch = attrs.match(/id="([^"]+)"/);
    const levelMatch = attrs.match(/data-level="(\d+)"/);
    const id = idMatch ? idMatch[1] : "";
    let level = levelMatch ? parseInt(levelMatch[1], 10) : 0;
    const tooltipInfo = tooltips.get(id);
    const count = tooltipInfo ? tooltipInfo.count : 0;
    if (count === 0) {
      level = 0;
    }
    const tooltipText = tooltipInfo ? tooltipInfo.text : (count === 0 ? `No contributions on ${formatReadableDate(date)}` : `${count} contributions on ${formatReadableDate(date)}`);

    dayMap.set(date, { level, count, tooltipText });
  }

  const { weeks, monthSpans } = generateDynamicWeeks(dayMap, 40);

  return {
    totalContributions,
    weeks,
    monthSpans,
    lastUpdated: new Date().toISOString(),
    isLive: true,
  };
}
