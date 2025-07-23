import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'My PWA App',
  description: 'Book services online easily',
  manifest: '/manifest.json'
};

export const viewport = {
  themeColor: '#317EFB'
}

export default function RootLayout({ children }) {

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js') // This path is relative to the origin
      .then(function (registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch(function (error) {
        console.log('Service Worker registration failed:', error);
      });
  }

  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
