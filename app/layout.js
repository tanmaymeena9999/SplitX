import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import Header from "@/components/header";
import { Inter } from "next/font/google";
import { ConvexClientProvider } from "@/components/convex-client-provider";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "SplitX",
  description: "Smart way to split expenses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo.png" sizes="any" />
      </head>
      <body
        className={`${inter.className}`}>
        <ClerkProvider>
        <ConvexClientProvider>
          <Header />
          <main className="min-h-screen">
            {children}
            <Toaster/>
          </main>
        </ConvexClientProvider>
      </ClerkProvider>
    </body>
    </html >
  );
}
