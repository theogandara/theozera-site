import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
import Test from "@/components/test/page";
const Nav = dynamic(() => import("@/components/Nav"));

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "theozera",
  description: "I've always been different.",
};

const items = [
  { name: "home", url: "/" },
  { name: "projetos", url: "/projects" },
  { name: "objetivos", url: "/objectives" },
  { name: "blog", url: "/blog" },
  { name: "weeklyCheck", url: "/weeklyCheck" },
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
        <main className="flex min-h-screen flex-col gap-12 p-4 md:px-24">
          <Test />
          <Header />
          <Nav items={items} />
          {children}
        </main>
      </body>
    </html>
  );
}
