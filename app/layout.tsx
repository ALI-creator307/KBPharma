import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/caveat/500.css";
import "@fontsource/caveat/600.css";
import "@fontsource/caveat/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "KBFarma | Professional Poultry Vaccination Services",
  description:
    "Safe, effective and timely poultry vaccination services to protect your chicks from deadly diseases and ensure healthy growth. Trusted by 1000+ farmers across Pakistan.",
  keywords: [
    "poultry vaccination",
    "chick vaccination",
    "poultry farm services",
    "disease prevention poultry",
    "KBFarma Pakistan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
