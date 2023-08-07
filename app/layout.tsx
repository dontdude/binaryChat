import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BinaryChat',
  description: 'Welcome to BinaryChat, your ultimate messenger web app powered by Next.js! Connect, chat, and collaborate effortlessly with friends and colleagues. Explore the future with our innovative Chat with AI feature, enhancing your conversations with intelligent and responsive AI interactions. Experience seamless messaging and cutting-edge AI integration, all in one platform. Join BinaryChat and revolutionize your communication today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
