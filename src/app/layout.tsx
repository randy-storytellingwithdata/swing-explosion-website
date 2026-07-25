import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swingexplosion.com"),
  title: {
    default: "Swing Explosion | The Midwest's Premier 18-Piece Big Band",
    template: "%s | Swing Explosion",
  },
  description:
    "Swing Explosion is an 18-piece big band based in the Greater Milwaukee area, fronted by Pete Sorce and arranged by Jeff La Barge, bringing swing, jazz, and dance music to corporate events, private parties, and fundraising galas.",
  openGraph: {
    title: "Swing Explosion | The Midwest's Premier 18-Piece Big Band",
    description:
      "High-energy swing and jazz for corporate events, private parties, and fundraising galas. Based in the Greater Milwaukee area.",
    siteName: "Swing Explosion",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-cream">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-ink focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
