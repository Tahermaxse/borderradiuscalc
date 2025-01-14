import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const roboto_mono = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Border Radius Calculator',
  description: 'A tool to calculate and visualize border radius values',
  keywords: ['border radius', 'calculator', 'CSS tool', 'design', 'frontend'],
  authors: [
    { name: 'Taher Hathi', url: 'https://borderadiuscalc.vercel.app/' },
  ],
  creator: 'Taher Hathi',
  publisher: 'LoomUI',
  openGraph: {
    title: 'Border Radius Calculator',
    description: 'A tool to calculate and visualize border radius values',
    url: 'https://borderadiuscalc.vercel.app/',
    siteName: 'Border Radius Calculator',
    images: [
      {
        url: 'https://borderadiuscalc.vercel.app/og-image.png',
        width: 800,
        height: 600,
        alt: 'Border Radius Calculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@taher_max_',
    creator: '@taher_max_',
    title: 'Border Radius Calculator',
    description: 'A tool to calculate and visualize border radius values',
    images:['https://borderadiuscalc.vercel.app/og-image.png']
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto_mono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
