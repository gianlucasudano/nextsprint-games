import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Nav } from "@/app/components/nav";

import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next Sprint Games",
  description: "Next Sprint home task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header>
          <Nav />
        </header>
        {children}
      </body>
    </html>
  );
}
