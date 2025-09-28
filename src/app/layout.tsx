import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/providers/app";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flavor Forge",
  description: "Recipe stock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable}`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
