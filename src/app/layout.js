import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";
import ScrollEffects from "./ScrollEffects";
import Footer from "./components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Polished Home Co.",
  description: "Get your home sparkling clean",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ScrollEffects />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
