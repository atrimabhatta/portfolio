import type { Metadata } from "next";
// @ts-ignore: allow global CSS import in Next.js layout
import "./globals.css";

export const metadata: Metadata = {
  title: "Atrima Bhattacharyya — Software Engineer & AI/ML Developer",
  description:
    "Personal portfolio of Atrima Bhattacharyya — MCA student, AI/ML engineer, and data analytics developer based in Kolkata, India.",
  keywords: ["Software Engineer", "AI/ML", "Data Analytics", "Power BI", "Python", "Portfolio"],
  authors: [{ name: "Atrima Bhattacharyya" }],
  openGraph: {
    title: "Atrima Bhattacharyya",
    description: "Building intelligent systems at the intersection of AI and human experience.",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=JetBrains+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0e0e0f] text-[#f0ede8] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
