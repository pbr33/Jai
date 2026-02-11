import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  title: "DivyaSeva (दिव्यसेवा) — Divine Puja Services at Your Doorstep",
  description:
    "Book authentic Vedic pujas, havan, and sacred rituals with experienced pandits. Griha Pravesh, Rudra Abhishek, Mahamrityunjay, Satyanarayan Katha, Dosha Nivaran & more. Available in Hindi, Kannada, Tamil, Telugu.",
  keywords:
    "puja booking, pandit booking, housewarming puja, griha pravesh, rudra abhishek, mahamrityunjay, satyanarayan katha, mangal dosh, kaal sarp dosh, vedic rituals, online puja, pandit near me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
