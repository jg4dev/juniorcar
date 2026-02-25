import "./globals.css";
import type { ReactNode } from "react";

import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import PageTransition from "src/components/PageTransition";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR" className="bg-neutral-900">
      <body className={`${inter.className} bg-neutral-900 min-h-screen flex flex-col`}>
        
        <Navbar />

        <PageTransition>
          <main className="flex-1">
            {children}
          </main>
        </PageTransition>

        <Footer />

      </body>
    </html>
  );
}