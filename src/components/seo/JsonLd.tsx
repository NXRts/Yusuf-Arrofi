import React from "react";
import { profileData } from "@/data/profile";

export default function JsonLd() {
  const baseUrl = "https://yusufarrofi.my.id";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: profileData.name,
    alternateName: [profileData.nickname, profileData.handle, "Yusuf Arrofi", "NXRts"],
    jobTitle: profileData.title,
    description: profileData.bio,
    url: baseUrl,
    image: `${baseUrl}/icon.png`,
    email: profileData.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surakarta",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
    sameAs: [
      profileData.socials.github,
      profileData.socials.linkedin,
      profileData.socials.linksPortal,
    ],
    knowsAbout: [
      "Go (Golang)",
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Arch Linux",
      "Full-Stack Development",
      "API Development",
      "Open Source Software",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Muhammad Yusuf Arrofi — Portfolio & Engineering Hub",
    description: profileData.tagline,
    publisher: {
      "@id": `${baseUrl}/#person`,
    },
    inLanguage: ["en-US", "id-ID"],
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${baseUrl}/#profilepage`,
    url: baseUrl,
    name: `${profileData.name} (${profileData.handle}) — Portfolio`,
    mainEntity: {
      "@id": `${baseUrl}/#person`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
