import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credentials & Professional Honors",
  description:
    "Verified professional certifications, competitive programming awards, course completions, and technical credentials earned by Muhammad Yusuf Arrofi.",
  alternates: {
    canonical: "https://yusufarrofi.my.id/certificates",
  },
  openGraph: {
    title: "Credentials & Professional Honors | Muhammad Yusuf Arrofi",
    description:
      "Verified professional certifications and honors in Go, Web Development, Cloud, and Software Engineering.",
    url: "https://yusufarrofi.my.id/certificates",
  },
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
