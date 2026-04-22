import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Battikha",
  description:
    "Engineer building AI for small businesses and advancing surgical robotics. Jacobs Scholar at UC San Diego.",
};

const themeInitScript = `
(function(){
  try {
    var t = localStorage.getItem('ab.theme') || 'dark';
    var html = document.documentElement;
    html.setAttribute('data-theme', t);
    html.classList.add(t);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
