import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const notoSerif = Noto_Serif_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "九鬼 - 暮らしに活かすエシカル",
  description: "九鬼のために活動したいこと",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSerif.className} antialiased bg-[#f8f9fa] text-[#1a2b4c] min-h-screen flex flex-col`}
      >
        <header className="w-full bg-[#f8f9fa]/90 backdrop-blur-md border-b border-[#1a2b4c]/10 flex items-center justify-between px-6 py-4 sticky top-0 z-50">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-widest text-[#1a2b4c]">
            九鬼
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-widest">
            <Link href="/" className="hover:opacity-60 transition-opacity">TOP</Link>
            <Link href="/story" className="hover:opacity-60 transition-opacity">ストーリー</Link>
            <Link href="/kuki" className="hover:opacity-60 transition-opacity">九鬼の紹介</Link>
            <Link href="/contact" className="hover:opacity-60 transition-opacity">お問い合わせ</Link>
            <Link href="/product" className="hover:opacity-60 transition-opacity">商品</Link>
          </nav>
        </header>
        <main className="flex-grow flex flex-col w-full h-full relative">
          {children}
        </main>
      </body>
    </html>
  );
}
