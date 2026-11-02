export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "flagship" | "fullstack" | "frontend" | "backend" | "desktop" | "tools";
  featured: boolean;
  featuredOrder?: number;
  image: string;
  description: string;
  fullDescription: string;
  problem: string;
  contribution: string;
  technicalDecisions: string[];
  features: string[];
  tags: string[];
  metrics?: {
    platform?: string;
    architecture?: string;
    deployment?: string;
    stack?: string;
  };
  link?: string;
  github?: string;
}

export const projectsData: Project[] = [
  {
    id: "japan-app",
    slug: "japan-app",
    title: "JapanApp",
    subtitle: "Interactive Japanese Language Learning Platform",
    category: "flagship",
    featured: true,
    featuredOrder: 1,
    image: "/assets/website/JapanApp.webp",
    description:
      "A comprehensive Japanese language learning web platform featuring interactive Kanji stroke recognition, complete JLPT N5–N1 curriculums, and an algorithmic Spaced Repetition System (SRS) designed for sustained vocabulary retention.",
    fullDescription:
      "JapanApp is a modern, high-retention web application specifically engineered for mastering Japanese writing systems (Kanji, Hiragana, Katakana) and JLPT N5 through N1 vocabulary. Rather than presenting static flashcards, the platform integrates interactive stroke-order canvas animations, mnemonic memory aids, real-time dictionary lookups with the Jisho API, and an automated Spaced Repetition System that calculates review intervals based on individual recall accuracy.",
    problem:
      "Learners of Japanese often struggle to bridge the gap between passive recognition and active recall of Kanji characters and vocabulary. Generic flashcard tools lack stroke order guidance, JLPT level stratification, and contextual sentence examples.",
    contribution:
      "Designed and developed the entire application from concept to deployment: authored the SRS scheduling algorithm, structured the JLPT N5–N1 dataset, implemented responsive canvas stroke animations, and integrated real-time Jisho API search.",
    technicalDecisions: [
      "Custom Spaced Repetition System (SRS) interval engine running client-side with persistent LocalStorage state.",
      "Optimized Next.js client-side caching to minimize external API requests to Jisho.",
      "Lightweight SVG canvas rendering for smooth 60fps Kanji stroke-order animations.",
      "Mobile-first responsive layout tailored for daily study sessions on phones and tablets."
    ],
    features: [
      "Interactive stroke-order breakdown and character animation for Kanji",
      "Full JLPT N5 to N1 curriculum with tiered vocabulary and practice quizzes",
      "Algorithmic Spaced Repetition System (SRS) for optimized review intervals",
      "Real-time Japanese dictionary lookup integrated with Jisho API",
      "Hiragana and Katakana interactive syllabary charts with audio pronunciation",
      "Daily study streak tracker and progress analytics"
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Jisho API", "Vercel"],
    metrics: {
      platform: "Web Application",
      architecture: "Next.js App Router",
      deployment: "Vercel Edge",
      stack: "TypeScript + Tailwind CSS"
    },
    link: "https://japan-mee.vercel.app/",
    github: "https://github.com/NXRts/JapanApp",
  },
  {
    id: "datascry",
    slug: "datascry",
    title: "DataScry",
    subtitle: "Privacy-First Offline Document & Image Suite",
    category: "tools",
    featured: true,
    featuredOrder: 2,
    image: "/assets/website/dataScary.webp",
    description:
      "A privacy-first, client-side utility suite for processing PDF documents, manipulating images, and inspecting file metadata entirely inside the browser without transmitting user data to any external server.",
    fullDescription:
      "DataScry is an offline-first document and media workbench built to solve the privacy concerns inherent in traditional web conversion tools. By utilizing browser Web Workers and client-side processing pipelines, DataScry executes document transformations, image compression, format conversions, and metadata inspection entirely locally. No documents or sensitive files ever leave the user's browser, eliminating data leaks and ensuring zero server dependency.",
    problem:
      "Most online PDF and image utilities require users to upload confidential contracts, IDs, or proprietary documents to unknown third-party servers, posing critical privacy and compliance hazards.",
    contribution:
      "Architected the local-processing engine utilizing modern Web APIs (FileReader, Canvas API, OffscreenCanvas, and Web Workers). Designed a clean, distraction-free user interface focused on high-throughput file processing.",
    technicalDecisions: [
      "Offloaded CPU-intensive image compression and file parsing to dedicated Web Workers to prevent UI thread stutter.",
      "Pure client-side pipeline with zero analytics tracking and zero external telemetry for absolute user confidentiality.",
      "Memory management routines to safely stream and garbage-collect large PDF and image buffers in browser memory.",
      "Progressive Web App (PWA) readiness allowing full utility without an active internet connection."
    ],
    features: [
      "Local-first PDF parsing, page extraction, and document merging",
      "Lossless and lossy image compression with adjustable quantization sliders",
      "Format conversion across PNG, WebP, JPEG, and PDF",
      "Client-side EXIF and camera metadata inspection with privacy scrub option",
      "Zero server round-trips: operates seamlessly in airplane mode"
    ],
    tags: ["TypeScript", "React", "Next.js", "Web Workers", "Tailwind CSS", "PWA"],
    metrics: {
      platform: "Client-Side Web Suite",
      architecture: "Web Workers / Local-First",
      deployment: "Vercel Edge",
      stack: "TypeScript + Web APIs"
    },
    link: "https://datascry.vercel.app/",
    github: "https://github.com/NXRts/DataScry",
  },
  {
    id: "aria2-app",
    slug: "aria2-app",
    title: "Aria2App",
    subtitle: "Desktop GUI for aria2 Multi-Connection Downloader",
    category: "desktop",
    featured: true,
    featuredOrder: 3,
    image: "/assets/website/Aria2App.webp",
    description:
      "A fast, modern desktop graphical user interface built with Python and PyQt6 for the high-performance aria2c multi-connection download utility, communicating seamlessly over JSON-RPC sockets.",
    fullDescription:
      "Aria2App provides a refined, native desktop interface for aria2c—the multi-protocol, multi-source command-line download utility renowned for maximum bandwidth saturation. Built with Python and PyQt6, Aria2App communicates with the local or remote aria2 daemon via JSON-RPC. It features segmented download monitoring, bandwidth throttle controls, multi-file queue scheduling, and automated daemon lifecycle management.",
    problem:
      "While aria2c is one of the fastest download accelerators available, its purely command-line interface and configuration overhead make queue management, segmented progress inspection, and connection throttling difficult for daily desktop use.",
    contribution:
      "Architected the Python application structure, implemented the asynchronous JSON-RPC client wrapper for aria2 daemon communication, designed the PyQt6 native desktop UI with dark aesthetic, and built cross-platform packaging.",
    technicalDecisions: [
      "Asynchronous JSON-RPC socket client polling the aria2c daemon without freezing the PyQt GUI event loop.",
      "Clean separation of the daemon communication layer from the Qt presentation and model layer.",
      "Configurable thread pooling for handling background file system verifications and notifications.",
      "Native system tray integration with background minimization for uninterrupted downloads."
    ],
    features: [
      "Real-time download speed meters, active connection count, and ETA calculations",
      "Multi-segmented download acceleration with customizable split chunk size",
      "Support for HTTP, HTTPS, FTP, and BitTorrent URI protocols",
      "Queue management: pause, resume, reorder, and schedule batch tasks",
      "Built-in daemon auto-spawn: automatically launches aria2c in the background if not active",
      "Dark-themed desktop UI with lightweight memory footprint"
    ],
    tags: ["Python", "PyQt6", "aria2c", "JSON-RPC", "Desktop UX", "Linux"],
    metrics: {
      platform: "Desktop GUI (Linux/Windows)",
      architecture: "PyQt6 + Asynchronous RPC",
      deployment: "Open Source Package",
      stack: "Python 3.11 + Qt6"
    },
    github: "https://github.com/NXRts/Aria2App",
  },
  {
    id: "prameswari-eo",
    slug: "prameswari-eo",
    title: "Prameswari EO",
    subtitle: "Tourism & Adventure Event Organizer Platform",
    category: "fullstack",
    featured: true,
    featuredOrder: 4,
    image: "/assets/website/PrameswariEO.webp",
    description:
      "Official web platform for an adventure tour operator in Kemuning, Karanganyar, featuring interactive tour package catalogs (Jeep Safari & River Tubing), responsive media galleries, and direct WhatsApp booking dispatch.",
    fullDescription:
      "Prameswari EO is a custom production web application built for an event organizer and outdoor adventure operator in Kebun Teh Kemuning, Central Java. The platform presents 6 tiered corporate outbound packages, 9 offroad jeep safari routes with detailed route itineraries, river tubing packages, and an interactive photo gallery. It solves real customer conversion bottlenecks by providing structured package selections that dynamically formulate targeted WhatsApp booking requests.",
    problem:
      "The client relied on manual brochures and repetitive phone consultations to explain tour itineraries and pricing, leading to high administrative friction and lost booking inquiries.",
    contribution:
      "Engineered the complete web application from client discovery through production deployment: designed mobile-first UX, catalog taxonomy, optimized high-resolution image delivery, and implemented one-click booking dispatch.",
    technicalDecisions: [
      "Dynamic reservation dispatch formulating pre-filled WhatsApp messages with package, passenger count, and chosen date.",
      "Aggressive responsive image optimization with WebP formats to maintain fast loads on spotty cellular connections in mountainous regions.",
      "Semantic HTML and structured JSON-LD schema for local tourism business discoverability on Google Search.",
      "Modular package configuration enabling the client to update seasonal rates and itinerary highlights quickly."
    ],
    features: [
      "Interactive package filter for 6 Outbound tiers and 9 Jeep Safari route options",
      "Direct WhatsApp reservation flow with dynamic itinerary summary formatting",
      "Categorized photo and video gallery showcasing actual tour vehicles and routes",
      "Local SEO metadata with structured LocalBusiness schema markup",
      "Fast mobile navigation tailored for tourists on 4G cellular connections"
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO / JSON-LD", "Vercel"],
    metrics: {
      platform: "Production Web App",
      architecture: "Next.js App Router",
      deployment: "Vercel Edge",
      stack: "React + Tailwind CSS"
    },
    link: "https://prameswari-eo.vercel.app/",
    github: "https://github.com/NXRts/Prameswari-EO",
  },
  {
    id: "yusuf-expedition",
    slug: "yusuf-expedition",
    title: "Yusuf Expedition (DPSA)",
    subtitle: "Digital Peak-Scaling Archive & High-Altitude Ascent Logs",
    category: "fullstack",
    featured: false,
    image: "/assets/website/Yusuf_Expedition.webp",
    description:
      "A dedicated mountaineering expedition archive documenting Indonesian alpine ascents, featuring interactive geospatial tracking maps, chronological ascent timelines, elevation gain profiles, and peak databases.",
    fullDescription:
      "DPSA (Digital Peak-Scaling Archive / Yusuf Expedition) is a comprehensive web portal engineered to immortalize and map high-altitude alpine expeditions across Indonesia (including Mount Semeru, Mount Lawu, Mount Merbabu, Mount Rinjani, and beyond). Built with Next.js, React, and TypeScript, the platform pairs interactive route maps with chronological ascent rails, waypoint elevation metrics, and comprehensive peak information for mountaineers and outdoor explorers.",
    problem:
      "High-altitude mountaineering logs and trail telemetry are typically scattered across disparate forum posts, unindexed social updates, or private GPS devices, making historical ascent verification and route planning difficult to analyze.",
    contribution:
      "Engineered the full-stack web archive: designed the peak database taxonomy, built the interactive chronological ascent timeline rail, integrated geospatial tracking map components, and optimized media delivery for outdoor mobile viewing.",
    technicalDecisions: [
      "Chronological ascent rail detailing milestone waypoints, summit altitudes, and expedition timestamps.",
      "Geospatial route tracking map with custom elevation profile rendering.",
      "Responsive editorial dark theme engineered for high legibility in outdoor bright-sunlight and low-battery field conditions.",
      "Optimized WebP image delivery preserving alpine photography clarity while minimizing bandwidth consumption."
    ],
    features: [
      "Interactive expedition tracking map with geographic waypoints and elevation profiles",
      "Chronological ascent rail detailing multi-peak expedition timelines and summit logs",
      "Comprehensive Indonesian mountain archive covering major peaks (Semeru, Lawu, etc.)",
      "Expedition leader biography and alpine philosophy documentation",
      "Fast, responsive layout optimized for mobile field viewing"
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Geospatial Maps", "Expedition Archive", "Vercel"],
    metrics: {
      platform: "Web Application",
      architecture: "Next.js App Router",
      deployment: "Vercel Edge",
      stack: "TypeScript + Tailwind CSS"
    },
    link: "https://yuexp.vercel.app/",
  },
  {
    id: "periodik",
    slug: "periodik",
    title: "Periodik",
    subtitle: "Interactive Chemistry Periodic Table SPA",
    category: "frontend",
    featured: false,
    image: "/assets/website/Tabel_Periodik.webp",
    description:
      "A fast, responsive single-page web application visualizing the periodic table of elements with real-time property filtering, electron configuration diagrams, and thermodynamic data.",
    fullDescription:
      "Periodik is an educational web tool providing an interactive, color-coded periodic table for students and chemistry enthusiasts. Users can search and filter elements by atomic number, block, phase, electronegativity, and discovery year, with instant modal breakdowns of physical and chemical attributes.",
    problem:
      "Traditional periodic tables are static and do not allow quick property comparisons, dynamic phase transitions across temperatures, or mobile-friendly inspection.",
    contribution:
      "Designed the layout grid reflecting standard IUPAC layout, compiled detailed element datasets, and authored real-time multi-attribute search.",
    technicalDecisions: [
      "CSS Grid layout that faithfully maintains the standard 18-column periodic structure on desktop and gracefully collapses for touch screens.",
      "Zero runtime dependencies for lightning-fast First Contentful Paint.",
      "Client-side instant search filtering across 118 elements without latency."
    ],
    features: [
      "Full 118 chemical elements with IUPAC data and atomic weights",
      "Dynamic filtering by chemical family, state of matter, and orbital block",
      "Detailed element cards: electron shell diagrams, melting/boiling points, electronegativity",
      "High-contrast color coding for accessible reading"
    ],
    tags: ["JavaScript", "HTML5", "CSS3", "Chemistry Data", "SPA"],
    metrics: {
      platform: "Single-Page Web Utility",
      architecture: "Client-Side SPA",
      deployment: "Vercel",
      stack: "JavaScript + CSS Grid"
    },
    link: "https://periodik-two.vercel.app/",
    github: "https://github.com/NXRts/Tabel-Periodik",
  },
  {
    id: "smart-compressor",
    slug: "smart-compressor",
    title: "Smart Compressor",
    subtitle: "Client-Side In-Browser Image Optimization",
    category: "tools",
    featured: false,
    image: "/assets/website/Smart_Compressor.webp",
    description:
      "An in-browser media compression utility that shrinks image file sizes without compromising visual quality, running 100% locally on the user device.",
    fullDescription:
      "Smart Compressor (FileKompres) allows users to drag and drop batches of images, configure quality thresholds and maximum dimensions, and export optimized assets instantly without uploading files to any external server.",
    problem:
      "Standard compression websites limit file sizes, queue jobs, or secretly store user images. Smart Compressor eliminates wait times and privacy risks by doing all computation client-side.",
    contribution:
      "Developed the canvas resampling logic, compression ratio calculations, and bulk download ZIP packaging.",
    technicalDecisions: [
      "HTML5 Canvas 2D image scaling with bicubic interpolation.",
      "Lossy and lossless conversion targets between PNG, JPEG, and WebP.",
      "Instant visual side-by-side comparison slider showing before/after compression quality."
    ],
    features: [
      "Zero server upload: 100% offline-ready browser computation",
      "Interactive compression slider with instant byte saving preview",
      "Batch processing with single-click ZIP archive generation",
      "Custom resolution resizing and metadata stripping"
    ],
    tags: ["JavaScript", "Canvas API", "Image Processing", "Tailwind CSS"],
    metrics: {
      platform: "Web Utility",
      architecture: "In-Browser Processing",
      deployment: "Vercel",
      stack: "Vanilla JS + Canvas"
    },
    link: "https://kompres.vercel.app/",
    github: "https://github.com/NXRts/FileKompres",
  },
  {
    id: "remove-bg",
    slug: "remove-bg",
    title: "RemoveBG",
    subtitle: "Fast Image Background Isolation",
    category: "tools",
    featured: false,
    image: "/assets/website/Remove_Backgrounds.webp",
    description:
      "A focused web tool for isolating subjects and eliminating backgrounds from product photos and portraits with high edge fidelity.",
    fullDescription:
      "RemoveBG provides a clean interface for transparent background extraction. Tailored for e-commerce product photos and portrait crops, it processes images with crisp Alpha channel exports.",
    problem:
      "Manual clipping paths in graphics software require significant time, while many web utilities enforce watermarks or subscription walls.",
    contribution:
      "Constructed the responsive UI, file dropzone, edge preview canvas, and transparent PNG export pipeline.",
    technicalDecisions: [
      "High-contrast checkerboard canvas preview for immediate transparency verification.",
      "Client-side image pipeline with lossless PNG export preservation."
    ],
    features: [
      "Instant subject isolation with transparent PNG export",
      "High-contrast preview mode to inspect fine hair and edge details",
      "Batch upload support with drag-and-drop ergonomics",
      "One-click resolution export options"
    ],
    tags: ["TypeScript", "Next.js", "Canvas API", "Tailwind CSS"],
    metrics: {
      platform: "Web Utility",
      architecture: "Next.js App",
      deployment: "Vercel",
      stack: "TypeScript + React"
    },
    link: "https://remove-bg-ebon.vercel.app/",
    github: "https://github.com/NXRts/Remove_Background",
  },
  {
    id: "ghost-data",
    slug: "ghost-data",
    title: "GhostData",
    subtitle: "Image Metadata & EXIF Security Inspector",
    category: "tools",
    featured: false,
    image: "/assets/website/GhostData.webp",
    description:
      "A privacy-focused utility to inspect, analyze, and scrub sensitive EXIF metadata—including GPS coordinates, device serials, and timestamp footprints—from digital photos.",
    fullDescription:
      "GhostData reveals what digital photos share behind the scenes. It decodes binary EXIF headers directly in the browser to extract camera models, lens specifications, exposure parameters, and embedded GPS coordinates, providing a one-click sanitizer that exports pristine metadata-free images.",
    problem:
      "Smartphone and digital cameras embed precise GPS coordinates and device identifiers into photo headers, which can compromise personal safety when uploaded to public forums.",
    contribution:
      "Implemented binary EXIF parsing, coordinate mapping to OpenStreetMap, and clean client-side metadata stripping.",
    technicalDecisions: [
      "Pure client-side binary buffer parsing without server uploads.",
      "Embedded coordinate visualization showing exact photo capture locations.",
      "Lossless EXIF stripping without re-compressing JPEG pixel data."
    ],
    features: [
      "Complete EXIF tag extraction (Camera, Aperture, ISO, Lens, Serial)",
      "Geolocation extraction with interactive map pin display",
      "One-click privacy scrub: removes all EXIF tags from JPEG/PNG images",
      "Zero network requests: 100% private and offline"
    ],
    tags: ["JavaScript", "EXIF Parsing", "Security & Privacy", "OpenStreetMap"],
    metrics: {
      platform: "Privacy Utility",
      architecture: "Client-Side Binary Parser",
      deployment: "Vercel",
      stack: "JavaScript + Web APIs"
    },
    github: "https://github.com/NXRts/GhostData",
  },
  {
    id: "foc-ease",
    slug: "foc-ease",
    title: "FocEase",
    subtitle: "Minimalist Focus & Productivity Dashboard",
    category: "tools",
    featured: false,
    image: "/assets/website/Focuse_Ease.webp",
    description:
      "A distraction-free productivity space combining ambient soundscapes, customized Pomodoro intervals, and a lightweight markdown scratchpad.",
    fullDescription:
      "FocEase is built for developers and writers needing an intentional workspace. It integrates audio synthesis for binaural beats and ambient rainfall, customizable work/break timers, and a local markdown notes buffer with zero cloud syncing distractions.",
    problem:
      "Modern productivity suites are overloaded with notifications, task boards, and social integrations that fracture deep work sessions.",
    contribution:
      "Built the audio mixing engine using the Web Audio API, Pomodoro state machine, and clean typography-focused writing interface.",
    technicalDecisions: [
      "Web Audio API synthesized sound loops preventing network streaming lag.",
      "LocalStorage persistence for timers, task streaks, and scratch notes.",
      "Keyboard shortcut architecture for seamless timer toggling during writing."
    ],
    features: [
      "Customizable Pomodoro timer intervals with discreet chime alerts",
      "Ambient background audio generator (rain, cafe, white noise, vinyl)",
      "Markdown quick-scratch notepad with local storage auto-save",
      "Full-screen Zen mode with dark minimalist styling"
    ],
    tags: ["React", "TypeScript", "Web Audio API", "LocalStorage", "Tailwind CSS"],
    metrics: {
      platform: "Web Application",
      architecture: "Single-Page React App",
      deployment: "Vercel",
      stack: "React + Web Audio"
    },
    github: "https://github.com/NXRts/FocEase",
  },
  {
    id: "backend-simaku",
    slug: "backend-simaku",
    title: "Simaku E-Learning Service",
    subtitle: "Clean Architecture Microservice in Go",
    category: "backend",
    featured: false,
    image: "/assets/website/JapanApp.webp",
    description:
      "Backend API service for an educational learning management system built with Go and PostgreSQL, following Clean Architecture and Domain-Driven Design.",
    fullDescription:
      "Engineered in Go, Simaku serves as the backend engine for a multi-tenant school portal. It implements Clean Architecture with strict separation between Domain, Repository, and Use-case layers. Features role-based access control (Admin, Teacher, Student), coursework distribution, and secure JWT token rotation.",
    problem:
      "Monolithic educational portals often suffer from tightly coupled database queries that degrade under concurrent student quiz submissions.",
    contribution:
      "Architected the Go codebase, designed relational PostgreSQL schemas, created JWT middleware, and wrote comprehensive unit tests for use cases.",
    technicalDecisions: [
      "Clean Architecture (DDD) establishing strict boundary abstractions across domain layers.",
      "Connection pooling and prepared statements for high query resilience.",
      "JWT authentication with token blacklist and refresh rotation."
    ],
    features: [
      "Role-based access control (RBAC) with granular route protection",
      "Clean Architecture with distinct domain models and repository interfaces",
      "Structured logging and central error-handling middleware",
      "PostgreSQL schema migrations with foreign key constraints"
    ],
    tags: ["Go (Golang)", "PostgreSQL", "Clean Architecture", "JWT", "REST API", "Docker"],
    metrics: {
      platform: "Backend Service",
      architecture: "Clean Architecture (DDD)",
      deployment: "Docker Container",
      stack: "Go 1.22 + PostgreSQL"
    },
    github: "https://github.com/NXRts/simaku-backend",
  },
  {
    id: "backend-bukutamu",
    slug: "backend-bukutamu",
    title: "BukuTamu Event Registration API",
    subtitle: "High-Concurrency Guestbook Service in Go",
    category: "backend",
    featured: false,
    image: "/assets/website/PrameswariEO.webp",
    description:
      "High-throughput event attendee registration service engineered in Go and PostgreSQL, built to withstand burst check-in traffic with sub-15ms response times.",
    fullDescription:
      "BukuTamu is a high-concurrency event check-in and guestbook API built in Go. Engineered for physical events with simultaneous check-in spikes, it uses connection pooling, composite database indices, and memory caching to maintain sub-15ms API responses.",
    problem:
      "Event registration apps commonly face traffic bottlenecks during physical check-in periods, leading to database connection exhaustion and server timeouts.",
    contribution:
      "Designed and benchmarked the Go HTTP server, implemented database indexing strategies, and created CSV attendance analytics export endpoints.",
    technicalDecisions: [
      "Sub-15ms database query latency via composite indexing and query optimization.",
      "Connection pool tuning preventing connection leaks under high concurrency.",
      "Input sanitization and validation safeguarding against SQL injection."
    ],
    features: [
      "High-concurrency check-in endpoint engineered for concurrent write operations",
      "Real-time attendance counter and exportable CSV rosters",
      "Optimized database schema with foreign-key referential integrity",
      "RESTful API design with structured JSON response payloads"
    ],
    tags: ["Go (Golang)", "PostgreSQL", "REST API", "Concurrency", "Database Indexing"],
    metrics: {
      platform: "Backend API Service",
      architecture: "Concurrent HTTP Service",
      deployment: "Linux Server",
      stack: "Go 1.22 + PostgreSQL"
    },
    github: "https://github.com/NXRts/bukutamu-api",
  },
];
