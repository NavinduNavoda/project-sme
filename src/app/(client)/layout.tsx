import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import "../globals.css";
import Nav from "@/components/nav2";
import Footer from "@/components/Footer";

const chivo = Chivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SME",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={chivo.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
