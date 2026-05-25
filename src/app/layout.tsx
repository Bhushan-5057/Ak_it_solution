import type { Metadata } from "next";
import "./globals.css";
import AOSInit from "@/components/AOSInit";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PageLoader from "@/components/common/PageLoader";

export const metadata: Metadata = {
  title: {
    template: "%s | AK IT Solution",
    default: "AK IT Solution - Cyber Security & Enterprise IT Solutions",
  },
  description:
    "AK IT Solution delivers cyber security, SOC monitoring, cloud protection, secure software development, and enterprise IT solutions.",
  metadataBase: new URL("https://akitsolution.com"),
  icons: {
    icon: [
      { url: "/icons/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icons/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <PageLoader />
        <AOSInit />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
