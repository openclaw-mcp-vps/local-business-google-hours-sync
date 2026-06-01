import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HoursSync — Sync Business Hours Across All Platforms',
  description: 'Update your business hours once and sync instantly to Google, Yelp, Facebook, and 20+ directories. Save time and eliminate inconsistencies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1f604224-3669-4ea3-b129-269c30d200b2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
