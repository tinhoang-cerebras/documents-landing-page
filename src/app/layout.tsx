import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteTitle = "Cerebras Training and Inference Docs";
const siteDescription = "Cerebras Training and Inference Docs";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: siteTitle,
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google" content="notranslate" />
        <meta name="edge" content="notranslate" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

