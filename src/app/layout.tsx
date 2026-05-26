import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Central Barbershop | Traditional Barber Shop in Kissimmee, FL',
  description: 'Experience the classic barbershop tradition in Kissimmee. Expert haircuts, beard trims, straight razor shaves, friendly service, and hometown atmosphere. Walk-ins welcome.',
  openGraph: {
    "title": "Central Barbershop | Traditional Barber Shop in Kissimmee, FL",
    "description": "Experience the classic barbershop tradition in Kissimmee. Expert haircuts, beard trims, straight razor shaves, friendly service, and hometown atmosphere. Walk-ins welcome.",
    "url": "https://www.centralbarbershopkissimmee.com",
    "siteName": "Central Barbershop",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/luxury-armchairs-barber-shop_140725-7720.jpg",
        "alt": "Interior of a traditional barbershop"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Central Barbershop | Traditional Barber Shop in Kissimmee, FL",
    "description": "Experience the classic barbershop tradition in Kissimmee. Expert haircuts, beard trims, straight razor shaves, friendly service, and hometown atmosphere. Walk-ins welcome.",
    "images": [
      "http://img.b2bpic.net/free-photo/luxury-armchairs-barber-shop_140725-7720.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
