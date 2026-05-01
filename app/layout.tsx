import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/factory/templates/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Core Desk | Organize Your Life With Clarity",
  description: "Task Management, Notes, and Calculator — all in one workspace.",
  icons: {
    icon: "/favicon", // assuming favicon.ico is in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="light">
      <body className="h-full flex flex-col">
        <Navbar />
        <main className="flex-1 mt-16">{children}</main>
      </body>
    </html>
  );
}
