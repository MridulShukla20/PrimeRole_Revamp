import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrimeRole - Collaboration with AI Employees",
  description: "PrimeRole is a collaboration tool where people and AI employees work side by side.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
