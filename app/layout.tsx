import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const SITE_URL = "https://www.solsticestudio.example";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Solstice Studio — Residential architecture shaped by light",
    template: "%s — Solstice Studio",
  },
  description:
    "Solstice Studio is a residential architecture practice in Portland, Oregon that designs homes around solar orientation, seasonal light, and how people actually occupy space through the day.",
  openGraph: {
    title: "Solstice Studio — Residential architecture shaped by light",
    description:
      "A residential architecture practice designing homes around solar orientation and seasonal light, based in Portland, Oregon.",
    url: SITE_URL,
    siteName: "Solstice Studio",
    type: "website",
  },
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
    <html lang="en">
      <body className="font-body">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
