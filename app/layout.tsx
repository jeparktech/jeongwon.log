import 'css/tailwind.css'
import 'css/globals.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Inter, Noto_Sans_KR } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { Umami } from 'pliny/analytics/Umami'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
})

const umamiWebsiteId = '8f24a5b4-7c49-49eb-a005-ea030c782233'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language}
      className={`${inter.variable} ${notoSansKr.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${basePath}/static/favicons/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/static/favicons/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/static/favicons/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#09090b" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#09090b" />
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      <Umami umamiWebsiteId={umamiWebsiteId} />
      <body className="bg-white pl-[calc(100vw-100%)] font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SectionContainer>
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              <Header />
              <main className="mb-auto">{children}</main>
            </SearchProvider>
            <Footer />
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
