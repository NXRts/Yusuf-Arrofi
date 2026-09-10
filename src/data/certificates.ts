export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  credentialId: string;
  link: string;
  image: string;
}

export const certificatesData: Certificate[] = [
  {
    id: "cert-aws-cpp",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "August 2024",
    description: "Earners of this certification have an overall understanding of the AWS Cloud platform, covering core cloud concepts, security, architecture best practices, and pricing models. Validates foundational ability to design and navigate AWS infrastructure.",
    skills: ["Cloud Computing", "AWS Core Services", "Security & IAM", "Cloud Architecture"],
    credentialId: "AWS-CPP-12345",
    link: "https://aws.amazon.com/certification/",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cert-dicoding-fe",
    title: "Front-End Web Developer Expert",
    issuer: "Dicoding Indonesia",
    date: "July 2024",
    description: "Advanced front-end development certification covering Progressive Web Apps (PWA), Web Performance Optimization, accessibility (A11y), clean code, and automated testing with modern JavaScript frameworks.",
    skills: ["JavaScript", "PWA", "Web Performance", "Accessibility", "A11y", "Testing"],
    credentialId: "D-FE-98765",
    link: "https://www.dicoding.com/",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cert-meta-react",
    title: "Meta Front-End Developer",
    issuer: "Coursera / Meta",
    date: "June 2024",
    description: "Professional certificate by Meta preparing developers for industry-standard React architecture, complex state management, component lifecycles, and seamless Figma-to-code translation.",
    skills: ["React", "UI/UX Design", "State Management", "REST APIs", "Figma"],
    credentialId: "META-FE-45678",
    link: "https://www.coursera.org/",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cert-gcp-ace",
    title: "Google Cloud Associate Engineer",
    issuer: "Google Cloud",
    date: "May 2024",
    description: "Demonstrates practical competencies deployed in provisioning cloud solutions, managing storage/compute resources, configuring access security, and monitoring enterprise workloads natively on GCP.",
    skills: ["Google Cloud Platform", "Kubernetes", "Docker", "DevOps", "Networking"],
    credentialId: "GCP-ACE-34567",
    link: "https://cloud.google.com/certification/",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cert-kubernetes-cka",
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    date: "April 2024",
    description: "Certification verifying hands-on production skills in Kubernetes cluster architecture, workload deployment, pod networking, ingress controllers, and storage orchestration.",
    skills: ["Kubernetes", "Docker", "DevOps", "Cluster Management", "YAML"],
    credentialId: "LF-CKA-78910",
    link: "https://www.cncf.io/certification/cka/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cert-react-native",
    title: "React Native Advanced Concepts",
    issuer: "Udemy",
    date: "March 2024",
    description: "Mastery of React Native cross-platform mobile ecosystem, custom animations with Reanimated, gesture handling, offline sync, and deep navigation architectures.",
    skills: ["React Native", "Mobile Dev", "Animations", "TypeScript"],
    credentialId: "UC-RN-112233",
    link: "https://www.udemy.com/",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cert-frontend-advanced",
    title: "Advanced CSS and Sass",
    issuer: "Udemy",
    date: "February 2024",
    description: "Comprehensive mastery of modern CSS layout specifications: CSS Grid, Flexbox, responsive fluid typography, custom properties, animations, and clean modular Sass architecture.",
    skills: ["CSS3", "Sass", "Responsive Design", "UI Architecture"],
    credentialId: "UC-CSS-445566",
    link: "https://www.udemy.com/",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cert-docker-certified",
    title: "Docker Certified Associate",
    issuer: "Docker",
    date: "January 2024",
    description: "Validates foundational expertise in containerization, multi-stage Dockerfiles, Docker Compose service stacks, security auditing, and continuous integration pipeline automation.",
    skills: ["Docker", "Containers", "DevOps", "CI/CD", "Linux"],
    credentialId: "DOCKER-CA-778899",
    link: "https://www.docker.com/",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop",
  },
];
