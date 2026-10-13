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
  title: 'Cobilion — Monetise your facility data.',
  description:
    'Cobilion helps facility and factory operators anonymise, label, and sell worker and site data to frontier robotics labs.',
  openGraph: {
    title: 'Cobilion',
    description: 'Monetise your facility data.',
    url: 'https://cobilion.com',
    siteName: 'Cobilion',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobilion — Monetise your facility data.',
    description: 'Anonymise, label, and sell facility data to frontier robotics labs.',
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
