import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://docs.cerebras.ai";
const siteTitle = "Cerebras Developer Documentation";
const siteDescription =
  "Find Cerebras developer documentation for training, inference, and SDK workflows.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: siteTitle,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
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
      </head>
      <body>{children}</body>
    </html>
  );
}
