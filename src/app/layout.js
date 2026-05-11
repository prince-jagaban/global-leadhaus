import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {

  description:
    "Global LeadHaus Consult Ltd is a multidisciplinary consulting and advisory firm specializing in corporate advisory, training, infrastructure, IT, auditing, procurement, oil & gas, and strategic communications.",

  keywords: [
    "Consulting Firm Nigeria",
    "Corporate Advisory",
    "Infrastructure Consulting",
    "Training and Capacity Development",
    "Oil and Gas Advisory",
    "Procurement Advisory",
    "Election Audit",
    "Governance Consulting",
    "IT Consulting Nigeria",
    "Public Relations",
    "Global LeadHaus",
  ],

  authors: [{ name: "Global LeadHaus Consult Ltd" }],

  creator: "Global LeadHaus",

  openGraph: {
    title: "Global LeadHaus Consult Ltd",
    description:
      "Strengthening institutions and empowering leadership through strategic consulting and advisory services.",

    url: "https://www.globalleadhaus.com",

    siteName: "Global LeadHaus",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Global LeadHaus",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Global LeadHaus Consult Ltd",
    description:
      "Professional consulting and advisory services across governance, infrastructure, ICT, procurement, auditing, and public relations.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased bg-navy text-white">
        <Navbar />
        <main className="w-full pt-24">{children}</main>
        <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  name: "Global LeadHaus Consult Ltd",
                  url: "https://www.globalleadhaus.com",
                  logo: "https://www.globalleadhaus.com/logo.png",

                  sameAs: [
                    "https://www.linkedin.com/company/global-leadhaus",
                    "https://x.com/globalleadhaus",
                    "https://facebook.com/globalleadhaus",
                    "https://instagram.com/globalleadhaus",
                  ],

                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+2349058888449",
                    contactType: "customer service",
                    areaServed: "NG",
                    availableLanguage: "English",
                  },
                }),
              }}
            />
      </body>
    </html>
  );
}