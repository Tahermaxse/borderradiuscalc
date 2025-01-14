import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Border Radius Calculator',
  description: 'A tool to calculate and visualize border radius values',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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