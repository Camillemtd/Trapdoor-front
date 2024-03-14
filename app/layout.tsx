import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrapDoor",
  description: "One chance to win ",
};

// Components
import Header from "../components/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header>
            <Header />
          </header>
          <main className="min-h-full h-dvh">{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
