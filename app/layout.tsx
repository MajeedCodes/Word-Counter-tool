import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elegant Word Counter | Free Online Tool',
  description: 'Experience our beautiful, free online word counter tool. Instantly count words, characters, and more with a sleek, animated interface. Perfect for writers, students, and professionals.',
  keywords: 'Word limit checker, Text analyzer, Writing tool, Character limit counter, Content optimizer, SEO analyzer, Readability checker, Grammar checker, Text editor, Word frequency counter, Paragraph length counter, Copywriting tool, Content analysis, SEO word count, Content checker, Word count software, Sentence counter, Word density checker, Copy analysis tool, Text statistics, Writing productivity, Content evaluation, Writing assistant tool, Text optimization, Word count generator, Character counting tool, Article analyzer, Content length checker, Keyword density counter, Writing improvement tool, Blog post optimizer, Article length counter, SEO text analyzer, Online writing assistant, Copy length counter, Readability score checker, Content scoring tool, Digital writing assistant, Text input analysis, Article word count, Text clarity checker, Online word count tool.',
  openGraph: {
    title: 'Elegant Word Counter | Free Online Tool',
    description: 'Instantly count words and characters with our beautiful, animated word counter tool.',
    url: 'https://wordcounter.skybytelink.space/',
    siteName: 'Free Word Counter',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elegant Word Counter | Free Online Tool',
    description: 'Instantly count words and characters with our beautiful, animated word counter tool.',
    images: ['https://your-domain.com/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}

        <footer className="bg-gray-100 py-6 mt-10">
  <p className="text-center text-gray-600 text-sm sm:text-base">
    &copy; {new Date().getFullYear()} Word Counter.
  </p>
</footer>

      </body>
    </html>
  )
}

