import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Margarita Plakolli | Architecture Portfolio",
  description: "Creating spaces that inspire, empower communities, and blend seamlessly with nature through innovative and sustainable design.",
  keywords: ["architecture", "design", "sustainable", "co-housing", "Kosovo", "portfolio"],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Margarita Plakolli | Architecture Portfolio",
    description: "Creating spaces that inspire, empower communities, and blend seamlessly with nature through innovative and sustainable design.",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Margarita Plakolli | Architecture Portfolio",
    description: "Creating spaces that inspire, empower communities, and blend seamlessly with nature through innovative and sustainable design.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
