import type { Metadata } from "next";
import { Inter, Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";
import { constructMetadata } from "@/lib/utils";
import Script from "next/script";

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
        <Navbar/>
        <main className=" flex flex-col grainy-light  min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
          <Providers>{children}</Providers>
          </div>

          <Toaster/>
        </main>
        <Footer/>
        {/* <script src="http://localhost:3000/api/products/83cd4c1f-ea8e-4c5c-86cf-19680a5c5aea/banner"></script> */}
        <Script
    src="http://localhost:3000/api/products/83cd4c1f-ea8e-4c5c-86cf-19680a5c5aea/banner"
    strategy="lazyOnload"
  />
        </body>
    </html>
  );
}
