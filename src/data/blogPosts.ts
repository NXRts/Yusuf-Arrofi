export interface BlogPost {
  id: string;
  slug: string;
  title: {
    en: string;
    id: string;
  };
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: {
    en: string;
    id: string;
  };
  content: {
    en: string;
    id: string;
  };
  tags: string[];
}

export const blogPostsData: BlogPost[] = [
  {
    id: "handling-outliers-machine-learning",
    slug: "handling-outliers-machine-learning",
    title: {
      en: "Handling Outliers in Predictive Models",
      id: "Menangani Outlier dalam Model Prediktif",
    },
    category: "Data Science",
    date: "August 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    excerpt: {
      en: "Understanding how anomalies affect machine learning models and practical strategies to mitigate their impact.",
      id: "Memahami bagaimana anomali memengaruhi model machine learning dan strategi praktis untuk mengurangi dampaknya.",
    },
    content: {
      en: `In the ideal world of data science tutorials, datasets are perfectly clean and normally distributed. In reality, raw data is messy and riddled with anomalies. Outliers—data points that differ significantly from other observations—can completely derail the performance of predictive models. Algorithms like Linear Regression or K-Means Clustering are particularly sensitive to these extreme values, as they can heavily skew the calculated means and slopes.

### Detection Methods
The first step in handling outliers is detection. Visual tools like box plots and scatter plots provide an immediate intuitive grasp of the data spread. Mathematically, techniques like the Z-score method or the Interquartile Range (IQR) allow us to programmatically flag data points that fall outside acceptable thresholds.

- **Z-Score Method**: Measures how many standard deviations a point is from the mean. Typically values beyond ±3 are considered anomalous.
- **Interquartile Range (IQR)**: Identifies points below Q1 - 1.5 * IQR or above Q3 + 1.5 * IQR, which is far more resilient to non-normal distributions.

### Strategic Mitigation
Once identified, the engineer faces a critical decision: should these outliers be removed, capped, or kept? Removing outliers might mean losing valuable information if the anomalies represent a genuine, albeit rare, phenomenon (like credit card fraud). Often, transforming the data using log transformations or utilizing models inherently robust to outliers, such as Random Forests or Gradient Boosting, is the more sophisticated approach. Understanding the domain context is just as important as the mathematical execution.`,
      id: `Dalam dunia ideal tutorial data science, dataset sangat bersih dan terdistribusi secara normal. Pada kenyataannya, data mentah itu berantakan dan penuh dengan anomali. Outlier—titik data yang berbeda secara signifikan dari pengamatan lain—dapat sepenuhnya menggagalkan performa model prediktif. Algoritma seperti Regresi Linier atau K-Means Clustering sangat sensitif terhadap nilai ekstrem ini, karena dapat sangat membelokkan rata-rata dan kemiringan yang dihitung.

### Metode Deteksi
Langkah pertama dalam menangani outlier adalah deteksi. Alat visual seperti box plot dan scatter plot memberikan pemahaman intuitif langsung tentang sebaran data. Secara matematis, teknik seperti metode Z-score atau Interquartile Range (IQR) memungkinkan kita untuk secara terprogram menandai titik data yang berada di luar ambang batas yang dapat diterima.

- **Metode Z-Score**: Mengukur berapa standar deviasi suatu titik data dari rata-rata. Biasanya nilai di atas ±3 dianggap anomali.
- **Interquartile Range (IQR)**: Menandai titik di bawah Q1 - 1.5 * IQR atau di atas Q3 + 1.5 * IQR, yang lebih kebal terhadap data yang tidak terdistribusi normal.

### Strategi Mitigasi
Setelah diidentifikasi, data scientist menghadapi keputusan kritis: haruskah outlier ini dihapus, dibatasi (capped), atau dipertahankan? Menghapus outlier bisa berarti kehilangan informasi berharga jika anomali tersebut mewakili fenomena yang asli, meskipun langka (seperti deteksi fraud transaksi). Seringkali, mengubah data menggunakan transformasi logaritma atau memanfaatkan model yang secara inheren tahan outlier, seperti Random Forest atau Gradient Boosting, adalah pendekatan yang jauh lebih canggih.`,
    },
    tags: ["Machine Learning", "Data Science", "Python", "Algorithms"],
  },
  {
    id: "building-japanese-learning-app",
    slug: "building-japanese-learning-app",
    title: {
      en: "Building JapanApp: From Vision to SRS Architecture",
      id: "Membangun JapanApp: Dari Visi hingga Arsitektur SRS",
    },
    category: "Case Study",
    date: "July 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1528164344705-475426879c0d?q=80&w=1200&auto=format&fit=crop",
    excerpt: {
      en: "How I engineered JapanApp to help Japanese learners master Kanji stroke orders and vocabulary retention.",
      id: "Bagaimana saya merancang JapanApp untuk membantu pembelajar bahasa Jepang menguasai goresan Kanji dan daya ingat kosakata.",
    },
    content: {
      en: `Learning Japanese Kanji can be overwhelming. With thousands of characters, stroke orders, Onyomi, and Kunyomi readings, rote memorization without systematic intervals leads to high drop-out rates. I decided to build JapanApp (japan-mee.vercel.app) to tackle this challenge directly.

### The Technical Challenge
The core requirement was twofold:
1. **Interactive Stroke Order Canvas**: Rendering SVG vectors dynamically and evaluating whether user finger or cursor strokes follow proper stroke trajectory without high latency.
2. **Spaced Repetition System (SRS)**: Implementing an algorithm inspired by SuperMemo SM-2 to predict optimal review intervals based on difficulty feedback.

### Architecture with Next.js & TypeScript
Using Next.js alongside React and TypeScript allowed for server-rendered kanji dictionaries while keeping the interactive flashcard practice strictly client-side for zero-lag responsiveness. By persisting progress with local state synchronization, learners can study seamlessly with rapid feedback loops.`,
      id: `Mempelajari Kanji Jepang sering kali terasa menakutkan. Dengan ribuan karakter, urutan goresan (*stroke order*), bacaan Onyomi, dan Kunyomi, menghafal secara manual tanpa interval sistematis menyebabkan tingkat frustrasi yang tinggi. Saya memutuskan untuk membangun JapanApp (japan-mee.vercel.app) untuk menjawab tantangan tersebut.

### Tantangan Teknis
Kebutuhan utama mencakup dua hal:
1. **Kanvas Interaktif Goresan Kanji**: Merender vektor SVG secara dinamis dan mengevaluasi apakah goresan jari atau kursor pengguna mengikuti lintasan yang tepat tanpa lag.
2. **Sistem Pengulangan Berjarak (SRS)**: Menerapkan algoritma berbasis SuperMemo SM-2 untuk menghitung interval peninjauan optimal berdasarkan tingkat kesulitan.

### Arsitektur Next.js & TypeScript
Memanfaatkan Next.js bersama React dan TypeScript memungkinkan kamus kanji dirender secara optimal sementara latihan flashcard interaktif berjalan murni di sisi klien untuk responsivitas seketika.`,
    },
    tags: ["React", "Next.js", "TypeScript", "SRS Algorithm", "Japanese"],
  },
  {
    id: "wildstep-ecommerce-journey",
    slug: "wildstep-ecommerce-journey",
    title: {
      en: "Engineering WildStep: Rugged Outdoor E-Commerce",
      id: "Pengembangan WildStep: Toko Online Perlengkapan Outdoor",
    },
    category: "Project",
    date: "June 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    excerpt: {
      en: "Designing and scaling a robust online store for outdoor enthusiasts with Next.js and Prisma.",
      id: "Merancang dan membangun toko online tangguh bagi pecinta alam dengan Next.js dan Prisma.",
    },
    content: {
      en: `WildStep was conceived as an adventurous e-commerce experience. The goal was to combine the rugged spirit of outdoor exploration with a modern, fast, and tactile digital shopping journey.

Key highlights included implementing seamless multi-attribute inventory filtering (waterproof ratings, gear weights, temperature limits), dynamic image pre-caching, and instant cart updates powered by optimistic UI patterns.`,
      id: `WildStep dikonsepkan sebagai pengalaman belanja perlengkapan petualangan yang tangguh. Tujuannya adalah menggabungkan semangat eksplorasi alam bebas dengan antarmuka digital yang cepat, responsif, dan elegan.

Fokus utama mencakup implementasi filter inventaris multi-atribut (tingkat waterproof, bobot perlengkapan, ketahanan suhu), *pre-caching* gambar dinamis, serta pembaruan keranjang belanja instan menggunakan pola *optimistic UI*.`,
    },
    tags: ["Next.js", "Prisma", "PostgreSQL", "E-Commerce", "UI/UX"],
  },
  {
    id: "future-of-ai-2026",
    slug: "future-of-ai-2026",
    title: {
      en: "The State of AI & Developer Ergonomics in 2026",
      id: "Perkembangan AI & Ergonomi Developer di Tahun 2026",
    },
    category: "Technology",
    date: "May 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop",
    excerpt: {
      en: "How AI agents and autonomous coding assistants are reshaping everyday software engineering workflows.",
      id: "Bagaimana agen AI dan asisten coding otonom mengubah alur kerja rekayasa perangkat lunak sehari-hari.",
    },
    content: {
      en: `The software development landscape has undergone a monumental shift. What used to be simple snippet completion has evolved into proactive autonomous agents capable of analyzing full repository architectures, writing end-to-end tests, and provisioning infrastructure.

As developers, our role is shifting higher in abstraction: from typing boilerplate code to designing solid data models, auditing security boundaries, and curating system architectures.`,
      id: `Lanskap pengembangan perangkat lunak telah mengalami perubahan besar. Dari yang awalnya hanya sekadar *autocomplete* kode sederhana kini telah berevolusi menjadi agen otonom yang mampu menganalisis arsitektur repositori secara utuh, menulis pengujian end-to-end, dan mengelola konfigurasi infrastruktur.

Sebagai insinyur perangkat lunak, peran kita bergeser ke tingkat abstraksi yang lebih tinggi: dari sekadar mengetik kode boilerplate menjadi arsitek model data yang solid, pengawas keamanan sistem, dan kurator arsitektur.`,
    },
    tags: ["AI", "Future Tech", "Software Engineering", "Automation"],
  },
  {
    id: "react-nodejs-fullstack-guide",
    slug: "react-nodejs-fullstack-guide",
    title: {
      en: "Modern Fullstack Architecture with React & Go/Node",
      id: "Arsitektur Fullstack Modern dengan React & Go/Node",
    },
    category: "Tutorial",
    date: "April 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    excerpt: {
      en: "A guide to pairing snappy React frontend client layers with high-performance concurrent backend services.",
      id: "Panduan menggabungkan layer frontend React yang responsif dengan layanan backend konkurensi tinggi.",
    },
    content: {
      en: `In full-stack application development, separating concerns while maintaining type safety is essential. Combining React / Next.js on the client side with Go or Node.js on the API side yields blazing-fast user interfaces backed by lightweight, concurrent services.

This tutorial explores designing RESTful contracts, structuring PostgreSQL database transactions, and managing JWT authentication headers cleanly across boundaries.`,
      id: `Dalam pengembangan aplikasi full-stack, memisahkan lapisan tanggung jawab (*separation of concerns*) sembari mempertahankan *type safety* adalah hal yang sangat esensial. Menggabungkan React / Next.js di sisi klien dengan Go atau Node.js di sisi API menghasilkan antarmuka pengguna yang sangat responsif dengan dukungan backend konkurensi tinggi.

Artikel ini membahas perancangan kontrak RESTful yang konsisten, struktur transaksi database PostgreSQL, dan pengelolaan autentikasi JWT yang aman.`,
    },
    tags: ["React", "Node.js", "Go", "PostgreSQL", "Fullstack"],
  },
  {
    id: "modern-web-development-trends",
    slug: "modern-web-development-trends",
    title: {
      en: "Modern Web Trends: Zero Bloat, Fast Runtimes & Glassmorphism",
      id: "Tren Web Modern: Bebas Bloatware, Runtime Cepat & Glassmorphism",
    },
    category: "Development",
    date: "March 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    excerpt: {
      en: "Why lightweight web apps, edge deployments, and clean dark UI aesthetics are dominating modern frontend design.",
      id: "Mengapa aplikasi web ringan, deployment di edge, dan estetika UI gelap mendominasi desain frontend modern.",
    },
    content: {
      en: `Web development in recent years became overburdened with massive npm packages and unnecessary runtime bloat. The trend has now decisively swung back toward hyper-performance: server components, CSS-native animations, edge compute, and dark-themed glassmorphic interfaces.

Focusing on minimal bundle sizes and instant First Contentful Paint (FCP) creates digital experiences that delight users instantly.`,
      id: `Pengembangan web dalam beberapa tahun terakhir sempat terbebani oleh ukuran paket dependensi npm yang masif. Kini tren tersebut secara tegas berbalik ke arah efisiensi tinggi: *server components*, animasi CSS murni, komputasi edge, dan antarmuka *dark glassmorphism* yang elegan.

Fokus pada ukuran bundle yang minimal dan *First Contentful Paint* (FCP) seketika menciptakan pengalaman digital yang sangat memuaskan bagi pengguna.`,
    },
    tags: ["Performance", "CSS", "Next.js", "Design System"],
  },
  {
    id: "mastering-typescript-generics",
    slug: "mastering-typescript-generics",
    title: {
      en: "Mastering TypeScript Generics for Resilient Codebases",
      id: "Menguasai TypeScript Generics untuk Kode yang Tangguh",
    },
    category: "Programming",
    date: "February 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop",
    excerpt: {
      en: "Practical techniques to write scalable, reusable, and type-safe functions and components with TypeScript generics.",
      id: "Teknik praktis menulis fungsi dan komponen yang dapat digunakan kembali serta type-safe dengan generics di TypeScript.",
    },
    content: {
      en: `Generics are one of TypeScript's most powerful features, allowing developers to author components and utilities that work over a variety of types rather than a single one.

From wrapping API responses with generic envelopes to creating type-safe form schema validators and React polymorphic components, mastering generics transforms fragile code into robust software.`,
      id: `Generics adalah salah satu fitur paling andal di TypeScript yang memungkinkan insinyur membuat komponen dan utilitas yang dapat menangani berbagai tipe data secara aman tanpa kehilangan informasi tipe.

Mulai dari membungkus respons API dengan amplop generik hingga membuat validator skema formulir yang aman dan komponen React polimorfik, penguasaan generics mengubah kode yang rentan menjadi perangkat lunak yang sangat kokoh.`,
    },
    tags: ["TypeScript", "JavaScript", "Clean Code", "Type Safety"],
  },
];
