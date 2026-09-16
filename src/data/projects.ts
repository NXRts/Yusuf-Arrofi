export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  fullDescription?: string;
  features?: string[];
  image: string;
  category:
    | "flagship"
    | "fullstack"
    | "frontend"
    | "backend"
    | "desktop"
    | "tools";
  featured: boolean;
  tags: string[];
  metrics?: {
    platform?: string;
    users?: string;
    curriculum?: string;
    deployment?: string;
    tech?: string;
  };
  link?: string;
  github?: string;
}

export const projectsData: Project[] = [
  {
    id: "japan-app",
    slug: "japan-app",
    title: "JapanApp (japan-mee.vercel.app)",
    subtitle: "AI + Japanese Learning Platform",
    description:
      "Interactive web application engineered for mastering Japanese Kanji, Hiragana, Katakana, and JLPT vocabulary. Features stroke order recognition, mnemonic memory quizzes, SRS scheduling, and clean responsive UI tailored for Japanese language learners worldwide.",
    fullDescription:
      "JapanApp is an interactive, modern web application specifically engineered for mastering Japanese characters (Kanji, Hiragana, Katakana) and JLPT N5 through N1 vocabulary. It combines interactive stroke-order animations, mnemonic memory aids, real-time Jisho API integration, and an intelligent Spaced Repetition System (SRS) that optimizes learning retention for long-term fluency.",
    features: [
      "Interactive stroke-order breakdown and character animations for Kanji",
      "Full JLPT N5 to N1 curriculum with tiered vocabulary and practice quizzes",
      "Smart Spaced Repetition System (SRS) scheduler for optimal review intervals",
      "Real-time Japanese dictionary search synchronized with the Jisho API",
      "Clean responsive mobile-first dark interface with gamified streaks",
    ],
    image: "/assets/website/JapanApp.png",
    category: "flagship",
    featured: true,
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Jisho API",
      "Vite",
      "Vercel",
    ],
    metrics: {
      platform: "Web App",
      curriculum: "JLPT N5 - N1",
      deployment: "Vercel Edge",
      users: "10,480 Active Users",
    },
    link: "https://japan-mee.vercel.app/",
    github: "https://github.com/NXRts/JapanApp",
  },
  {
    id: "prameswari-eo",
    slug: "prameswari-eo",
    title: "Prameswari EO",
    subtitle: "Tour & Outbound Event Organizer Platform",
    description:
      "Official web platform for Prameswari EO Kemuning, featuring interactive tour package catalogs (Outbound 1-6, 9 Jeep Safari Routes, River Tubing Kali Pucung), direct WhatsApp booking integration, responsive gallery, and modern tourism management UI.",
    fullDescription:
      "Prameswari EO is a modern, responsive web application engineered for the official event organizer and adventure tour operator in Kebun Teh Kemuning, Karanganyar. The platform showcases 6 tiered corporate outbound packages, 9 offroad jeep safari routes with detailed itineraries, real-time search and filter controls, client testimonials, and automated direct WhatsApp reservation dispatch.",
    features: [
      "Interactive catalog with filtering for Outbound Packages (1-6) and 9 Jeep Safari Routes",
      "Direct WhatsApp reservation flow with customized booking messages and package selectors",
      "High-resolution interactive photo and video galleries with category tabs",
      "SEO-optimized architecture with structured JSON-LD schema for local tourism & travel agency",
      "Mobile-first responsive design engineered with smooth transitions and Lucide icons",
    ],
    image: "/assets/website/PrameswariEO.png",
    category: "fullstack",
    featured: true,
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Lucide Icons",
      "Vercel",
    ],
    metrics: {
      platform: "Web Application",
      tech: "Next.js + Tailwind CSS",
      deployment: "Vercel Edge",
    },
    link: "https://prameswari-eo.vercel.app/",
    github: "https://github.com/NXRts/Prameswari-EO",
  },
  {
    id: "aria2-app",
    slug: "aria2-app",
    title: "Aria2App",
    subtitle: "Cross-Platform Downloader GUI",
    description:
      "A modern desktop GUI application designed for the high-speed aria2 multi-connection downloader, built with Python and PyQt6 for seamless queue and RPC socket management.",
    fullDescription:
      "Aria2App is a sleek, cross-platform graphical user interface for the ultra-fast aria2c command-line multi-connection download utility. Built using Python and PyQt6, it communicates via JSON-RPC to monitor active downloads, manage segmented transfer queues, configure proxy settings, and maximize bandwidth utilization.",
    features: [
      "High-performance segmented multi-threaded downloading engine",
      "Real-time JSON-RPC socket connection to aria2 daemon",
      "Dynamic speed graphs, queue prioritization, and pause/resume control",
      "Native cross-platform desktop UI for Linux, Windows, and macOS",
    ],
    image: "/assets/website/Aria2App.png",
    category: "desktop",
    featured: true,
    tags: ["Python", "PyQt6", "Aria2c", "JSON-RPC", "Linux/Windows"],
    metrics: {
      platform: "Desktop GUI",
      tech: "Python + PyQt6",
    },
    github: "https://github.com/NXRts/Aria2App",
  },
  {
    id: "periodik",
    slug: "periodik",
    title: "Periodik",
    subtitle: "Interactive Chemistry Periodic Table",
    description:
      "Single-Page Application (SPA) providing comprehensive chemical element information, group classifications, electron configurations, and instant element search with vibrant neon UI.",
    fullDescription:
      "Periodik is an interactive chemistry web application providing an exploratory periodic table of the chemical elements. Built with pure modern web technologies, it features real-time search, chemical families filtering, detailed atomic properties, electron orbital configurations, and electronegativity scales with an eye-catching cyberpunk/neon aesthetic.",
    features: [
      "Interactive periodic table grid with instant element filtering by group and period",
      "Deep element inspection: atomic mass, electron configuration, oxidation states, and isotopes",
      "Color-coded category segregation (Alkali Metals, Halogens, Noble Gases, Transition Metals)",
      "Zero-dependency lightweight architecture ensuring instantaneous load speeds",
    ],
    image: "/assets/website/Tabel_Periodik.png",
    category: "frontend",
    featured: true,
    tags: ["JavaScript", "HTML5", "CSS3", "Web Components", "SPA"],
    metrics: {
      platform: "Chemistry SPA",
      tech: "Vanilla JS + CSS3",
    },
    link: "https://periodik-two.vercel.app/",
    github: "https://github.com/NXRts/Periodik",
  },
  {
    id: "datascry",
    slug: "datascry",
    title: "DataScry",
    subtitle: "100% Offline PDF, Word & Media Suite",
    description:
      "A privacy-first in-browser document and media suite. Process, convert, compress, and scrub sensitive files 100% locally on your machine without uploading a single byte to external servers.",
    fullDescription:
      "DataScry is an all-in-one, privacy-guaranteed document and media engineering platform that operates 100% client-side inside the user's browser using Web Workers and WebAssembly. It offers high-speed PDF merging, splitting, JPG/Word conversions, lossy/lossless compression, and digital EXIF metadata scrubbing without any server upload, ensuring absolute document confidentiality.",
    features: [
      "100% client-side offline execution via Web Workers & WebAssembly — zero server uploads",
      "Comprehensive PDF toolkit: Merge, Split, JPG to PDF, PDF to JPG, and Word (.docx) conversions",
      "In-browser fast file & photo compressor without arbitrary daily upload limits",
      "Digital privacy scrubber: strips hidden EXIF, camera, and GPS metadata before sharing",
      "Deep metadata & EXIF inspector for photos and documents",
      "Modern glassmorphism responsive dark UI with zero telemetry or tracking",
    ],
    image: "/assets/website/dataScary.png",
    category: "tools",
    featured: true,
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Web Workers",
      "WebAssembly",
    ],
    metrics: {
      platform: "Web Application",
      tech: "Next.js + Web Workers",
      deployment: "Vercel Edge",
    },
    link: "https://datascry.vercel.app/",
    github: "https://github.com/NXRts/DataScry",
  },
  {
    id: "markdown-preview",
    slug: "markdown-preview",
    title: "Markdown Preview",
    subtitle: "Live Preview & Syntax Highlighter",
    description:
      "Suite of lightweight web apps including live Markdown editor with split preview, syntax highlighter, and music playback utilities built with React & Next.js.",
    fullDescription:
      "A dual-pane live Markdown editor and previewer built with Next.js and React. Offers real-time split-screen rendering, customizable syntax themes via Highlight.js, GitHub-flavored markdown extensions, word/character statistics, and instant export to HTML or raw markdown.",
    features: [
      "Instantaneous split-screen real-time Markdown rendering",
      "GitHub Flavored Markdown (GFM) support: tables, task lists, code fences",
      "Syntax highlighting for 50+ programming languages via Highlight.js",
      "One-click copy, download markdown file, and clean HTML export",
    ],
    image: "/assets/website/Markdown_Preview.png",
    category: "tools",
    featured: true,
    tags: ["Next.js", "React", "Marked", "Highlight.js", "Vercel"],
    metrics: {
      platform: "Web Utility",
      tech: "Next.js + Marked",
    },
    link: "https://markdown-mee.vercel.app/",
    github: "https://github.com/NXRts/Markdown-Preview",
  },
  {
    id: "smart-compressor",
    slug: "smart-compressor",
    title: "Smart Compressor",
    subtitle: "Fast In-Browser Image Compressor",
    description:
      "Lightweight client-side image compression tool with live preview comparison, quality sliders, and instant multi-format downloads.",
    fullDescription:
      "Smart Compressor is a private, client-side image compression tool that operates entirely within the user's browser using HTML5 Canvas and Web APIs. It allows users to shrink images drastically while preserving optimal visual fidelity, featuring interactive before-and-after sliders and batch conversion capabilities.",
    features: [
      "100% Client-side processing ensuring images never leave your machine",
      "Interactive split before-and-after visual quality comparison",
      "Customizable target file size (KB/MB) and compression sliders",
      "Multi-format export supporting WebP, JPEG, and PNG formats",
    ],
    image: "/assets/website/Smart_Compressor.png",
    category: "tools",
    featured: false,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas API", "Vercel"],
    metrics: {
      platform: "Web Utility",
      tech: "Next.js + Canvas API",
    },
    link: "https://kompres.vercel.app/",
    github: "https://github.com/NXRts/FileKompres",
  },
  {
    id: "remove-bg",
    slug: "remove-bg",
    title: "Remove Background (RemoveBG)",
    subtitle: "HD Background Isolation SaaS",
    description:
      "A high-performance SaaS web application designed to remove image backgrounds while preserving HD and 4K resolution with dark glassmorphic UI.",
    fullDescription:
      "RemoveBG is a high-performance background removal web utility tailored for designers and content creators. It utilizes edge-optimized background segmentation pipelines to cleanly isolate subjects from complex backgrounds while preserving full HD and 4K image sharpness.",
    features: [
      "High-precision edge detection and subject isolation for portraits and objects",
      "Preserves original image resolution up to 4K without downscaling",
      "Clean transparent PNG export and custom background replacement previews",
      "Glassmorphism dark UI with drag-and-drop file support",
    ],
    image: "/assets/website/Remove_Backgrounds.png",
    category: "tools",
    featured: false,
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Image Processing"],
    metrics: {
      platform: "SaaS Utility",
      tech: "Next.js 14 + Tailwind",
    },
    link: "https://remove-bg-ebon.vercel.app/",
    github: "https://github.com/NXRts/RemoveBG",
  },
  {
    id: "foc-ease",
    slug: "foc-ease",
    title: "FocEase",
    subtitle: "Minimalist Focus & Zen Soundscape Dashboard",
    description:
      "A serene productivity dashboard designed for deep work sessions, combining a distraction-free focus timer, 12+ ambient soundscape mixer, glassmorphic task manager, and real-time prayer schedule calculations.",
    fullDescription:
      "FocEase is an ambient focus and productivity dashboard created to facilitate serene deep work sessions. Built on essentialist design principles, it unites a distraction-free countdown timer, an ambient soundscape mixer with 12+ independently controllable nature audio tracks, a glassmorphic persistent task manager, and automated real-time prayer schedule calculations.",
    features: [
      "Distraction-free countdown timer with configurable focus and break intervals",
      "Zen Soundscape Mixer with 12+ ambient sounds (Rain, Fireplace, Wind, Cafe, River, Birds)",
      "Individual volume sliders and audio mixing for tailored auditory environments",
      "Glassmorphic task manager with local persistence for daily deep-work priorities",
      "Automated prayer times calculation to keep professional and spiritual life in harmony",
    ],
    image: "/assets/website/Focuse_Ease.png",
    category: "tools",
    featured: false,
    tags: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 Audio",
      "Lucide React",
    ],
    metrics: {
      platform: "Web Dashboard",
      tech: "Next.js 14 + Audio API",
    },
    github: "https://github.com/NXRts/FocEase",
  },
  {
    id: "ghost-data",
    slug: "ghost-data",
    title: "GhostData | Metadata Inspector",
    subtitle: "Privacy-First File Metadata Extraction",
    description:
      "A privacy-focused in-browser metadata extraction tool. All EXIF, ID3, and binary file parsing takes place locally without sending data to servers.",
    fullDescription:
      "GhostData is a privacy-first file metadata inspector that parses EXIF, IPTC, ID3, and binary file headers directly in the browser. Users can uncover hidden geolocation coordinates, camera shutter parameters, creation dates, and embedded system metadata without uploading confidential files to any third-party server.",
    features: [
      "Zero-server architecture: all parsing happens securely in local browser memory",
      "Deep EXIF, XMP, IPTC, and camera hardware parameters extraction",
      "GPS coordinate detection with embedded map preview of capture locations",
      "Privacy cleaner to strip metadata before sharing images publicly",
    ],
    image: "/assets/website/GhostData.png",
    category: "tools",
    featured: false,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "EXIF Parser",
      "Privacy-First",
    ],
    metrics: {
      platform: "Privacy Utility",
      tech: "Next.js + EXIF Parser",
    },
    link: "https://ghostdata.vercel.app/",
  },
  {
    id: "music-player",
    slug: "music-player",
    title: "Music Player (Music Mee)",
    subtitle: "Web Audio Player with Playlists",
    description:
      "Responsive audio streaming web application featuring custom audio visualizers, persistent playlist storage, favorites, and ambient neon theme.",
    fullDescription:
      "Music Mee is a sleek web-based audio streaming application engineered with React and the HTML5 Web Audio API. It features real-time canvas frequency visualizers, persistent playlist curation, track queueing, audio gain controls, and smooth playback transitions in a futuristic neon atmosphere.",
    features: [
      "Real-time canvas-based audio frequency visualizer with responsive animations",
      "Persistent LocalStorage playlist management with custom track organization",
      "Seamless play, pause, seek, loop, volume control, and shuffle playback modes",
      "Responsive neon cyber aesthetic with ambient glow effects",
    ],
    image: "/assets/website/Music_Player.png",
    category: "frontend",
    featured: false,
    tags: [
      "React",
      "TypeScript",
      "Web Audio API",
      "LocalStorage",
      "Tailwind CSS",
    ],
    metrics: {
      platform: "Audio Web App",
      tech: "React + Web Audio API",
    },
    link: "https://music-mee.vercel.app/",
    github: "https://github.com/NXRts/Music-Player",
  },
  {
    id: "backend-simaku",
    slug: "backend-simaku",
    title: "Backend - Simaku E-Learning",
    subtitle: "Digital School Learning API Service",
    description:
      "Scalable backend microservice engineered in Golang and PostgreSQL with Clean Architecture, handling teacher-student course materials, assignments, and secure JWT auth.",
    fullDescription:
      "Backend microservice for Simaku E-Learning platform, engineered in Golang with PostgreSQL following Clean Architecture (Domain-Driven Design). Handles user authentication with JWT, course curriculum management, student-teacher assignments, grade reporting, and role-based access controls.",
    features: [
      "Clean Architecture with distinct Domain, Repository, and Use-case boundaries",
      "Role-based access control (RBAC) for Admins, Teachers, and Students",
      "Optimized PostgreSQL relational schemas with foreign key indexing",
      "Secure JWT authentication with refresh tokens and bcrypt password hashing",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "backend",
    featured: false,
    tags: ["Golang", "PostgreSQL", "Clean Architecture", "JWT", "REST API"],
    metrics: {
      platform: "Backend API",
      tech: "Go + PostgreSQL",
    },
  },
  {
    id: "backend-bukutamu",
    slug: "backend-bukutamu",
    title: "Backend - BukuTamu Event Service",
    subtitle: "High-Concurrency Guestbook API",
    description:
      "Event registration and attendee management service built with Go and PostgreSQL, delivering sub-15ms response times for high-volume check-ins.",
    fullDescription:
      "High-concurrency event registration and digital guestbook API service designed in Go and PostgreSQL. Built to withstand sudden bursts of event check-in traffic, maintaining sub-15ms response times with connection pooling and prepared statements.",
    features: [
      "High-throughput check-in endpoints engineered for concurrency",
      "Sub-15ms database query latency via connection pooling and indexing",
      "Exportable attendance analytics and real-time attendee counters",
      "RESTful API design with structured JSON responses and input validation",
    ],
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    category: "backend",
    featured: false,
    tags: ["Golang", "PostgreSQL", "REST API", "Database Indexing"],
    metrics: {
      platform: "Backend Service",
      tech: "Go + PostgreSQL",
    },
  },
  {
    id: "pomodoro-timer",
    slug: "pomodoro-timer",
    title: "Pomodoro Timer",
    subtitle: "Productivity Cycle Manager",
    description:
      "Clean timer web utility providing Pomodoro focus intervals, short breaks, long breaks, and task streak tracking stored in LocalStorage.",
    fullDescription:
      "A minimalist Pomodoro technique timer built with vanilla web technologies. Supports standard 25/5 focus and break cycles, custom interval adjustments, audio bell alerts, and daily productivity streak counters stored locally.",
    features: [
      "Classic 25-minute focus intervals with automated 5-minute break transitions",
      "Audio bell chimes and browser notification triggers on session completion",
      "Productivity streak tracking stored in browser LocalStorage",
      "Lightweight zero-dependency architecture with instantaneous load times",
    ],
    image:
      "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?q=80&w=1200&auto=format&fit=crop",
    category: "tools",
    featured: false,
    tags: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    metrics: {
      platform: "Web Utility",
      tech: "Vanilla JS + CSS3",
    },
    link: "https://pomodoro-time-eta.vercel.app/",
    github: "https://github.com/NXRts/Pomodoro_Time",
  },
  {
    id: "coba-tetris",
    slug: "coba-tetris",
    title: "Coba-Tetris Flutter",
    subtitle: "Mobile Retro Game in Dart",
    description:
      "Classic Tetris block-dropping arcade game built using Flutter and Dart with responsive layout for mobile and desktop screens.",
    fullDescription:
      "A retro block-stacking arcade puzzle game built using Flutter and Dart. Designed with a custom grid rendering engine, standard Tetromino rotation mechanics, line clearing animations, score multipliers, and adaptable controls for mobile and desktop screens.",
    features: [
      "Faithful Tetromino geometry, rotation kick systems, and collision detection",
      "Dynamic speed progression and score multipliers as lines are cleared",
      "Cross-platform Flutter build running seamlessly on Android, iOS, and Web",
      "Responsive on-screen touch controls with keyboard arrow fallbacks",
    ],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    category: "desktop",
    featured: false,
    tags: ["Flutter", "Dart", "Game Dev", "Mobile"],
    metrics: {
      platform: "Cross-Platform App",
      tech: "Flutter + Dart",
    },
    github: "https://github.com/NXRts/Coba-Tetris",
  },
];
