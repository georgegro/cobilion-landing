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
  title: 'Cobilion — Do a task. Sell it to the robots.',
  description:
    'The marketplace where humans record physical tasks and get paid — and robotics companies buy the demonstrations to train their AI.',
  openGraph: {
    title: 'Cobilion',
    description: 'Do a task. Sell it to the robots.',
    url: 'https://cobilion.com',
    siteName: 'Cobilion',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobilion — Do a task. Sell it to the robots.',
    description: 'The marketplace for robot training data.',
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
