import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Safa Tourism - Your Gateway to Memorable Journeys",
  description:
    "Safa Tourism, based in Hazratganj, Lucknow, offers personalized travel services including custom itineraries, flight & hotel bookings, visa assistance, and tour packages. Explore the world hassle-free with our expert travel solutions.",
  keywords: [
    "Safa Tourism",
    "Travel Agency Lucknow",
    "Best Travel Packages",
    "Custom Itineraries",
    "Flight and Hotel Booking",
    "Tour Packages",
    "Visa Assistance",
    "Local Sightseeing",
    "Travel Planning",
  ],
  author: "Safa Tourism",
  url: "https://safatourism.netlify.app/",
  type: "website",
  openGraph: {
    title: "Safa Tourism - Explore the World with Us",
    description:
      "Plan your dream vacation with Safa Tourism. From flights and hotels to guided tours and personalized itineraries, we make travel effortless and enjoyable.",
    url: "https://safatourism.netlify.app/",
    siteName: "Safa Tourism",
    images: [
      {
        url: "https://safatourism.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Safa Tourism Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safa Tourism - Explore the World with Us",
    description:
      "Safa Tourism offers the best travel services, including custom tour packages, flight bookings, and visa assistance. Start your journey today!",
    images: ["https://safatourism.netlify.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
