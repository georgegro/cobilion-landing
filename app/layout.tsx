import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cobilion — Monetise your factory floor data.',
  description:
    'Extra revenue per site for manufacturers. Zero line disruption. Anonymisation and encryption handled. Frontier robotics labs buy the data.',
  openGraph: {
    title: 'Cobilion',
    description: 'Monetise your factory floor data.',
    url: 'https://cobilion.com',
    siteName: 'Cobilion',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobilion — Monetise your factory floor data.',
    description: 'Extra revenue per site. Zero line disruption. Anonymisation and encryption handled.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  )
}
