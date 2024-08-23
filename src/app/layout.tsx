import type { Metadata, Viewport } from 'next';
import { Outfit as FontSans } from 'next/font/google';

import Layout from '~/lib/layout';

import '~/lib/styles/globals.css';

const body = FontSans({ subsets: ['latin'], variable: '--font-body' });

const APP_NAME = 'nextarter-park';

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Next.js App with TypeScript setup',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={body.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
