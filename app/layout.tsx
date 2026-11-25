import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DraftToggle } from "@/components/ClientBits";
import { BANNER, LOGO } from "@/lib/content";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-outfit", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Mrinaal Technologies", template: "%s – Mrinaal Technologies" },
  description: BANNER,
  icons: { icon: LOGO },
  // Set to your real domain once known, for canonical/OG URLs:
  // metadataBase: new URL("https://example.com"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b2447",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <DraftToggle />
      </body>
    </html>
  );
}
