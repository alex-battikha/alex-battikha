import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Battikha",
  description:
    "Engineer building AI for small businesses and advancing surgical robotics. Jacobs Scholar at UC San Diego.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
