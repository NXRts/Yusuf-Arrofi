# 🌐 Yusuf Arrofi — Developer Portfolio

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Website portofolio pribadi Muhammad Yusuf Arrofi (`@NXRts`)**  
*Full-Stack & Go Developer — Berfokus pada arsitektur performa tinggi, UI modern, dan pengalaman digital yang responsif.*

[🌐 Live Demo](https://yusufarrofi.my.id) • [🔗 Links Portal](https://links-mee.vercel.app) • [💼 LinkedIn](https://www.linkedin.com/in/muhammad-yusuf-arrofi-a26140299/) • [🐙 GitHub](https://github.com/NXRts)

</div>

---

## 📌 Ringkasan Proyek

Repositori ini berisi kode sumber untuk website portofolio resmi **Muhammad Yusuf Arrofi**. Dibangun menggunakan **Next.js 16 (App Router)**, **React 19**, **TypeScript**, dan **Tailwind CSS v4**. Website ini dirancang dengan estetika *dark cyber / glassmorphism* modern serta dilengkapi berbagai fitur interaktif seperti status telemetri *real-time*, kalender kontribusi GitHub dinamis, katalog proyek terfilter, timeline pengalaman, dan terminal kontak interaktif.

---

## ✨ Fitur Utama

- ⚡ **Hero & Telemetry Card**: Menampilkan status *node* interaktif (*region*, *latency*, *core stack*, dan lingkungan Arch Linux).
- 📊 **Dynamic GitHub Activity Graph**: Peta kontribusi GitHub *real-time* yang di-scrape langsung dari profil publik dengan zona waktu Asia/Jakarta (GMT+7) serta *caching & fallback system*.
- 💼 **Showcase Proyek Unggulan**: Daftar proyek (misal: *JapanApp*, *DataScry*, *Prameswari EO*, *Aria2App*, dll.) lengkap dengan deskripsi, metrik, filter kategori, tautan demo, dan repositori.
- 🛠️ **Capability & Tech Matrix**: Pengelompokan keahlian teknis (Frontend, Languages, Backend & DB, Tools & OS) dengan palet aksen visual khusus.
- ⏳ **Experience Timeline**: Linimasa perjalanan karier, pengalaman kerja, serta proyek skala industri.
- 🎓 **Halaman Sertifikat & Pencapaian**: Galeri sertifikasi dan kredensial profesional (`/certificates`).
- ✍️ **Blog & Artikel Teknis**: Ruang publikasi artikel dan pemikiran seputar rekayasa perangkat lunak (`/blog`).
- 📟 **Contact Terminal**: Antarmuka kontak bergaya CLI / terminal interaktif untuk mengirim pesan atau menyalin email langsung.
- 🔍 **SEO & OpenGraph Siap Pakai**: Metadata dinamis, `sitemap.ts`, `robots.ts`, dan gambar OpenGraph untuk *preview* optimal di media sosial.
- 📱 **Desain 100% Responsif**: Dioptimalkan untuk segala ukuran layar, dari perangkat mobile hingga desktop resolusi tinggi.

---

## 🛠️ Tech Stack

### Core & Framework
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Tooling & Deployment
- **Bundler**: Turbopack & Webpack (opsional)
- **Linting**: ESLint 9 (`eslint-config-next`)
- **Hosting / Deployment**: [Vercel Edge](https://vercel.com/)
- **Environment**: Linux (Arch Linux)

---

## 📁 Struktur Direktori

```text
├── public/                  # Aset statis, favicon, gambar web
├── src/
│   ├── app/                 # Next.js App Router (pages & API routes)
│   │   ├── api/             # API Endpoints (e.g. /api/github-activity)
│   │   ├── blog/            # Halaman blog & artikel dinamis
│   │   ├── certificates/    # Halaman showcase sertifikat
│   │   ├── projects/        # Halaman katalog seluruh proyek
│   │   ├── layout.tsx       # Root layout & navigasi global
│   │   ├── page.tsx         # Halaman utama (Home)
│   │   ├── robots.ts        # Generator robots.txt dinamis
│   │   └── sitemap.ts       # Generator sitemap.xml dinamis
│   ├── components/          # Komponen UI modular
│   │   ├── blog/            # Komponen tampilan blog
│   │   ├── layout/          # Navbar, Footer, Container
│   │   ├── projects/        # Kartu & filter proyek
│   │   ├── sections/        # Section halaman utama (Hero, GitActivity, dll)
│   │   └── seo/             # Komponen metadata & Schema JSON-LD
│   ├── data/                # Data statis & konfigurasi konten
│   │   ├── blogPosts.ts     # Data artikel blog
│   │   ├── certificates.ts  # Data kredensial & sertifikat
│   │   ├── experiences.ts   # Data riwayat pengalaman kerja
│   │   ├── profile.ts       # Data profil, bio, dan statistik
│   │   ├── projects.ts      # Data proyek & portofolio
│   │   └── testimonials.ts  # Testimoni klien / rekan kerja
│   └── lib/                 # Utility functions & helper
│       ├── github.ts        # Logika fetch & parsing kontribusi GitHub
│       └── github-baseline.json # Cache fallback data kontribusi
├── package.json             # Dependensi & skrip proyek
└── tsconfig.json            # Konfigurasi TypeScript
```

---

## 🚀 Memulai (Getting Started)

### Prasyarat
Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) (versi 18.18+ atau 20+ disarankan)
- Package manager: `npm`, `pnpm`, atau `bun`

### 1. Clone Repositori
```bash
git clone https://github.com/NXRts/Yusuf-Arrofi.git
cd Yusuf-Arrofi
```

### 2. Instal Dependensi
```bash
npm install
# atau
pnpm install
# atau
bun install
```

### 3. Jalankan Development Server
```bash
npm run dev
```

Buka browser dan akses [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

> **Tips:** Jika ingin menjalankan dev server menggunakan Webpack alih-alih Turbopack:
> ```bash
> npm run dev:webpack
> ```

---

## 📜 Skrip yang Tersedia

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan *development server* dengan Next.js Turbopack |
| `npm run dev:webpack` | Menjalankan *development server* menggunakan Webpack |
| `npm run build` | Membuat *production build* yang telah dioptimasi |
| `npm run start` | Menjalankan aplikasi hasil *build production* |
| `npm run lint` | Menjalankan pemeriksaan kode menggunakan ESLint |

---

## 🌐 Deployment

Aplikasi ini siap di-*deploy* langsung ke **[Vercel](https://vercel.com/)**:

1. Lakukan *push* kode ke repositori GitHub Anda.
2. Impor repositori ke Vercel Dashboard.
3. Vercel akan secara otomatis mendeteksi Next.js dan menjalankan `npm run build`.
4. Website Anda siap diakses secara global melalui CDN Edge Network.

---

## 👤 Profil & Kontak

**Muhammad Yusuf Arrofi** (`NXRts`)  
*Full-Stack & Go Developer*

- 🌐 **Portfolio**: [yusufarrofi.my.id](https://yusufarrofi.my.id)
- 🐙 **GitHub**: [@NXRts](https://github.com/NXRts)
- 💼 **LinkedIn**: [Muhammad Yusuf Arrofi](https://www.linkedin.com/in/muhammad-yusuf-arrofi-a26140299/)
- 🔗 **Links Portal**: [links-mee.vercel.app](https://links-mee.vercel.app)
- 📧 **Email**: [yusufarrofi21@gmail.com](mailto:yusufarrofi21@gmail.com)

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi [MIT](LICENSE). Silakan gunakan sebagai inspirasi atau referensi portofolio Anda.
