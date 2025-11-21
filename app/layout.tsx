import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import SmallNav from "@/components/shared/SmallNav";
import Footer from "@/components/shared/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Mazedur Rahman",
  description: "Personal portfolio of Mazedur Rahman.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${roboto.variable} font-sans antialiased`}>
        <Navbar />
        <SmallNav />
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
