import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'La Casa Restaurant | Premium Italian Fine Dining in New York',
  description: 'Experience authentic Italian cuisine at La Casa Restaurant. Book your table for an unforgettable fine dining experience with handcrafted pasta, fresh seafood, and an extensive wine selection in the heart of New York City.',
  generator: 'v0.app',
  keywords: ['Italian restaurant', 'fine dining', 'New York restaurant', 'Italian cuisine', 'pasta', 'wine bar', 'reservations', 'private dining'],
  authors: [{ name: 'La Casa Restaurant' }],
  openGraph: {
    title: 'La Casa Restaurant | Premium Italian Fine Dining',
    description: 'Discover authentic Italian flavors crafted with passion. Reserve your table for an unforgettable dining experience.',
    type: 'website',
    locale: 'en_US',
    siteName: 'La Casa Restaurant',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Casa Restaurant | Premium Italian Fine Dining',
    description: 'Discover authentic Italian flavors crafted with passion. Reserve your table today.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
