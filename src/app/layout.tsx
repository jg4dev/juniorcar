import "./globals.css";
import type { ReactNode } from "react";

import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import PageTransition from "src/components/PageTransition";
import { Inter } from "next/font/google";
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
   <html lang="pt-BR">
  <body className={inter.className}>
    {children}

        <Navbar />

        <PageTransition>
          {children}
        </PageTransition>

        <Footer />


      </body>
    </html>
  );
  
}
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});