import "../../styles/bootstrap.min.css";
import "../../styles/animate.min.css";
import "../../styles/remixicon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Globals Styles
import "../../styles/globals.css";
// Globals Responsive Styles
import "../../styles/responsive.css";

import type { Metadata } from "next";
import { Titillium_Web, Cabin } from "next/font/google";
import AosAnimation from "@/components/Layouts/AosAnimation";
import ScrollToTop from "@/components/Layouts/ScrollToTop";

// For all body text font
const titillium_web = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-titillium-web",
  display: "swap",
});

// For all heading font
const cabin = Cabin({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cabin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lofi - Multipurpose IT Startup React Nextjs Template",
  description: "Multipurpose IT Startup React Nextjs Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titillium_web.variable} ${cabin.variable}`}>
        {children}

        <AosAnimation />

        <ScrollToTop />
      </body>
    </html>
  );
}
