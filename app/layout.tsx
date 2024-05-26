import { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

// type Props = {
//   params: { : string }

// }

export const metadata: Metadata = {
  title: "LeetCode Board",
  description: "providing an online whiteboard for LeetCode problems",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <div className="relative flex min-h-screen flex-col">{children}</div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
