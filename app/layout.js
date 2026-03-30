import { Merriweather, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { siteConfig } from "@/data/siteContent";

const headingFont = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-heading"
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body"
});

export const metadata = {
  metadataBase: new URL("https://www.neevshaktisanstha.org"),
  title: {
    default: `${siteConfig.name} | Inclusive Disability Support NGO`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "NGO website",
    "disability support NGO",
    "accessible nonprofit website",
    "volunteer NGO",
    "inclusive community support"
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    siteName: siteConfig.name,
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="site-shell">
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
