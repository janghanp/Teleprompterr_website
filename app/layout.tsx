import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  title: "Teleprompterr",
  description: "A black-and-white teleprompter app built for focus.",
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
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        <header className="bg-black text-white">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" aria-label="Go to home">
              <Image
                src="/new_app_icon.png"
                alt="App icon"
                width={36}
                height={36}
                priority
              />
            </Link>
            <Link
              href="/#download"
              className="rounded-full border border-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              Download App
            </Link>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-black">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-6 py-6 text-xs uppercase tracking-[0.2em]">
            <div className="flex items-center gap-6">
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <a href="mailto:janghan0412@gmail.com">Contact</a>
            </div>
            <div className="text-center normal-case tracking-normal">
              © 2026 Janghan Park. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
