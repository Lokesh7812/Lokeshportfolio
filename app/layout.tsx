import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Lokesh S | MERN Stack Developer & Full Stack Web Developer',
  description: 'Premium portfolio of Lokesh S - MERN Stack Developer based in Chennai, India. 30+ client projects delivered with React, Node.js, and MongoDB.',
  keywords: 'MERN Stack Developer, Full Stack Web Developer, React Developer, Node.js, MongoDB, Chennai',
  authors: [{ name: 'Lokesh S' }],
  creator: 'Lokesh S',
  openGraph: {
    type: 'website',
    title: 'Lokesh S | MERN Stack Developer',
    description: 'Premium portfolio showcasing 30+ delivered projects and expertise in MERN stack',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
