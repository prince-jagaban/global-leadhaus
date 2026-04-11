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
  title: "Global LeadHaus Consult Ltd",
  description:
    "A multidisciplinary consulting firm dedicated to strengthening institutions and empowering leadership through expert advisory and capacity development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased bg-navy text-white">
        <Navbar />
        <main className="w-full pt-24">{children}</main>
      </body>
    </html>
  );
}