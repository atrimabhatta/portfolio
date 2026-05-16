import { label } from "framer-motion/client";

export const personalInfo = {
  name: "Atrima Bhattacharyya",
  nameShort: "Atrima",
  tagline: "Software Engineer · AI/ML · Data",
  headline: "Building intelligent systems at the intersection of AI and human experience.",
  bio: "MCA student (2026) at IEM Kolkata with a passion for AI/ML, data analytics, and full-stack development. I craft solutions that bridge the gap between complex data and meaningful insights — from emotion recognition pipelines to Power BI dashboards that drive real decisions.",
  location: "Kolkata, India",
  email: "atrima.bhattacharyya7642@gmail.com",
  phone: "+91-7890917642",
  github: "https://github.com/atrimabhatta",
  linkedin: "https://linkedin.com/in/atrima-bhattacharyya",
  resumeUrl: "C:\Users\dell\.vscode\atrima-portfolio-v2\public\ab.pdf",
  highlights: [
    "AI/ML Systems",
    "Data Analytics & BI",
    "Python · Java · SQL",
    "RAG & LLM Integration",
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
export const education = [
  {
    id: "edu-1",
    degree: "Master of Computer Applications",
    institution: "Institute of Engineering & Management",
    period: "2024 – Present",
    gpa: "80.9%",
    type: "Education",
    description:
      "Pursuing Master of Computer Applications with specialization in Artificial Intelligence, Data Science, and Cloud Computing. CGPA: 80.9% (up to 3rd Semester).",
    tags: ["AI", "Data Science", "Cloud Computing", "Research"],
  },
  {
    id: "edu-2",
    degree: "Bachelor of Computer Applications",
    institution: "Sarada Ma Girls' College, Barasat",
    period: "2021 – 2024",
    gpa: "71.30%",
    type: "Education",
    description:
      "Foundation in computer science, programming, database management, and software development. Graduated with 71.30%, building skills in Python, Java, and web technologies.",
    tags: ["Python", "Java", "DBMS", "Web Dev"],
  },
];
export const experiences = [
  {
    id: "exp-1",
    role: "Industrial Trainee — Power BI & AI/ML",
    company: "Euphoria GenX",
    period: "May 2025 – Aug 2025",
    type: "Training",
    description:
      "Built real-world Power BI dashboards integrated with AI/ML capabilities. Gained deep expertise in data transformation, DAX measures, and AI visual features applicable to enterprise analytics and BI workflows.",
    tags: ["Power BI", "AI/ML", "DAX", "Data Analytics"],
  },
  {
    id: "exp-2",
    role: "AI/ML Research — Facial Emotion Analysis",
    company: "IEM Kolkata (Agile Team)",
    period: "2024 – 2025",
    type: "Research",
    description:
      "Led ML development for a privacy-focused emotion recognition system. Collaborated in an Agile team of 4 with weekly sprints, peer code reviews, and structured SDLC documentation.",
    tags: ["Python", "ML", "Agile", "Computer Vision"],
  },
];

export const projects = [
  {
    id: "proj-1",
    title: "ResumeIQ — JD Matcher",
    category: "AI / NLP",
    status: "In Progress",
    description:
      "A RAG-powered resume screening system that semantically matches candidate PDFs to job descriptions. Uses OpenAI embeddings, Pinecone vector search, and GPT for LLM-generated match reasoning.",
    tech: ["Python", "OpenAI", "Pinecone", "RAG", "LangChain"],
    accentColor: "#a78bfa",
    github: "https://github.com/atrimabhatta",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Security on Facial Emotion Analysis",
    category: "AI / ML Security",
    status: "Completed",
    description:
      "An emotion recognition model hardened against adversarial, inference, and reconstruction attacks — protecting facial data privacy in real-world ML deployment scenarios.",
    tech: ["Python", "TensorFlow", "Adversarial ML", "OpenCV"],
    accentColor: "#67e8f9",
    github: "https://github.com/atrimabhatta",
    featured: true,
  },
  {
    id: "proj-3",
    title: "Sustainability & Carbon Footprint Dashboard",
    category: "Data Analytics / BI",
    status: "Completed",
    description:
      "Interactive Power BI dashboard tracking CO₂ emissions, renewable energy usage, and recycling impact for organizational sustainability reporting, with AI-driven insights surfacing reduction opportunities.",
    tech: ["Power BI", "DAX", "Power Query", "AI Visuals"],
    accentColor: "#34d399",
    github: "https://github.com/atrimabhatta",
    featured: true,
  },
  {
    id: "proj-4",
    title: "GA-Based Phishing Email Detection",
    category: "ML / Cybersecurity",
    status: "Completed",
    description:
      "Locally-executable phishing detection using Genetic Algorithm feature selection — improving classification accuracy while reducing noise and model overfitting in offline email security.",
    tech: ["Python", "Genetic Algorithms", "Scikit-learn", "NLP"],
    accentColor: "#fb923c",
    github: "https://github.com/atrimabhatta",
    featured: false,
  },
  {
    id: "proj-5",
    title: "Online Table Reservation System",
    category: "Full-Stack Web",
    status: "Completed",
    description:
      "Real-time restaurant booking system handling 50+ daily reservations with a 30% reduction in booking errors. PHP backend with MySQL database achieving 99.9% uptime.",
    tech: ["PHP", "MySQL", "XAMPP", "HTML/CSS", "JS"],
    accentColor: "#f472b6",
    github: "https://github.com/atrimabhatta",
    featured: false,
  },
];

export const skills = {
  Languages: ["Python", "Java", "SQL", "PHP", "TypeScript"],
  "AI / ML": ["TensorFlow", "Scikit-learn", "OpenCV", "OpenAI API", "LangChain", "RAG"],
  "Data & BI": ["Power BI", "DAX", "Power Query", "Data Modeling", "Excel"],
  "DevOps & Tools": ["Git", "GitHub", "Azure DevOps", "CI/CD", "VS Code"],
  "Cloud & DB": ["Azure", "MySQL", "Pinecone", "XAMPP"],
  "Core CS": ["DSA", "OOP", "OS", "Computer Networks", "DBMS", "SDLC"],
};

export const certifications = [
  { name: "CISSP Specialization", issuer: "Coursera (Infosec)", year: "2026" },
  { name: "NLP in Microsoft Azure", issuer: "Coursera", year: "2026" },
  { name: "Azure Cloud Services", issuer: "Microsoft", year: "2026" },
  { name: "Intro to Cybersecurity", issuer: "IBM", year: "2025" },
  { name: "Intro to Generative AI", issuer: "Microsoft", year: "2025" },
];
