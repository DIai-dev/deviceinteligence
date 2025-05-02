import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Zen_Tokyo_Zoo, Zen_Kurenaido } from 'next/font/google';
import CometCursor from '@/components/CometCursor';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const zenTokyoZoo = Zen_Tokyo_Zoo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-zen-tokyo',
});
const zenKurenaido = Zen_Kurenaido({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-zen-kurenaido',
});

export const metadata: Metadata = {
  title: 'Device Intelligence AI | Smart IoT Management',
  description:
    'DeviceInteligenceAI.com is a next-gen IoT platform powered by AI for real-time device tracking, analytics, and smart automation.',
  icons: {
    icon: '/Favicon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Device Intelligence AI',
    description:
      'Next-gen AI-powered IoT ecosystem. Monitor, automate, and control smart devices efficiently.',
    url: 'https://deviceinteligenceai.com',
    siteName: 'DeviceInteligenceAI',
    images: [
      {
        url: '/Favicon.png',
        width: 1200,
        height: 630,
        alt: 'Device Intelligence AI',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Device Intelligence AI',
    description:
      'AI-powered IoT dashboard to manage and monitor your smart devices.',
    site: '@DeviceIntAI',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${zenTokyoZoo.variable} ${zenKurenaido.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#FF9600" />
        <meta name="msapplication-TileColor" content="#D42300" />
      </head>
      <body className={inter.className}>
        {/* Add CometCursor here to enable the trail effect */}
        <CometCursor />
        {children}
      </body>

      <Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="ga" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
    </html>
  );
}
