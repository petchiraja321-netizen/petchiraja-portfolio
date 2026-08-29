import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}