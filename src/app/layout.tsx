import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "theozera",
  description: "I've always been different.",
};

const items = [
  { name: "home", url: "/" },
  { name: "projetos", url: "/projects" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <main className="flex flex-col ">
          <Header items={items} />
          {children}
        </main>
      </body>
    </html>
  );
}
