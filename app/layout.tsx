import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AuroraSauce Software",
  description: "Crafting thoughtful software experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

