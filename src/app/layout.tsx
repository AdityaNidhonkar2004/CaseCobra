import type { Metadata } from "next";
import { Inter, Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";
import { constructMetadata } from "@/lib/utils";

// const inter = Inter({ subsets: ["latin"] });
const recursive = Recursive({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />
        <main className=" flex flex-col grainy-light  min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Providers>{children}</Providers>
          </div>
          <Toaster />
        </main>
        <Footer />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://discomfy-uf1e.vercel.app/api/products/3dd2a2a6-3e62-4e36-aea9-7fdc114bb3d9/banner"></script>
      </body>
    </html>
  );
}
