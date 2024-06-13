import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: "Surfsynch B.V.",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-body-pattern">
      <body className={dm_sans.variable}>{children}</body>
    </html>
  );
}
