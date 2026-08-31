import type { Metadata } from "next";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "Petchiraja | AI · Data Science · Software",

  description:
    "Petchiraja's portfolio — building intelligent systems across AI, machine learning, data science, software development, and cloud-native AI.",

  icons: {
    icon: "/pr-logo.png",
  },

  keywords: [
    "Petchiraja",
    "AI",
    "Machine Learning",
    "Data Science",
    "Software Development",
    "Cloud Native AI",
    "Python",
    "React",
    "Node.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta
          name="google-site-verification"
          content="MuQXvYfVy23uD9FzPvti3u5vjvozH85J8NBLo9oQ_d4"
        />
      </head>

      <body className="min-h-full flex flex-col">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}