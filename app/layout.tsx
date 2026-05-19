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
  title: "なこなこカップルが別れた本当の理由",
  description: "キーワードを入れるだけ。こーくんとなごみが別れた本当の理由が明らかに。",
  openGraph: {
    title: "なこなこカップルが別れた本当の理由",
    description: "キーワードを入れるだけ。こーくんとなごみが別れた本当の理由が明らかに。",
    siteName: "なこなこ別れた理由ジェネレーター",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "なこなこカップルが別れた本当の理由",
    description: "キーワードを入れるだけ。こーくんとなごみが別れた本当の理由が明らかに。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
