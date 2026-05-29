import type { Metadata } from "next";
import { DocsHome } from "@/components/docs-home";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://docs.cerebras.ai";

export const metadata: Metadata = {
  title: "Cerebras Developer Documentation",
  description:
    "Find everything you need to get started with Cerebras products, including documentation for training, inference, and SDK workflows.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Cerebras Developer Documentation",
    description:
      "Find everything you need to get started with Cerebras products, including documentation for training, inference, and SDK workflows.",
    url: siteUrl,
    siteName: "Cerebras Developer Documentation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cerebras Developer Documentation",
    description:
      "Find everything you need to get started with Cerebras products, including documentation for training, inference, and SDK workflows.",
  },
};

export default function HomePage() {
  return <DocsHome />;
}
