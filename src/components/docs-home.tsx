"use client";

/* eslint-disable @next/next/no-img-element */
import { useSyncExternalStore } from "react";
import { embeddedAssets } from "@/lib/embedded-assets";

const colorSchemeQuery = "(prefers-color-scheme: dark)";

function subscribeToColorScheme(callback: () => void) {
  const mediaQuery = window.matchMedia(colorSchemeQuery);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getColorSchemeSnapshot() {
  return window.matchMedia(colorSchemeQuery).matches;
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-4 w-4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.25 3.25H4.5C3.80964 3.25 3.25 3.80964 3.25 4.5V11.5C3.25 12.1904 3.80964 12.75 4.5 12.75H11.5C12.1904 12.75 12.75 12.1904 12.75 11.5V9.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8L12.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.25 3.25H12.75V6.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SdkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.75"
        y="3.75"
        width="16.5"
        height="16.5"
        rx="4.25"
        stroke="#F38058"
        strokeWidth="1.5"
      />
      <path
        d="M9 9H9.01M12 9H12.01M15 9H15.01M9 12H9.01M12 12H12.01M15 12H15.01M9 15H9.01M12 15H12.01M15 15H15.01"
        stroke="#F38058"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cards = [
  {
    href: "https://training-docs.cerebras.ai",
    icon: embeddedAssets.iconTraining,
    iconAlt: "Training icon",
    title: "Training",
    description:
      "Effortlessly train and fine-tune large AI models with Cerebras PyTorch and ModelZoo, powered by the world's largest AI-optimized processor.",
  },
  {
    href: "https://inference-docs.cerebras.ai",
    icon: embeddedAssets.iconInference,
    iconAlt: "Inference icon",
    title: "Inference",
    description:
      "Build LLM applications with the world's fastest inference solution using the Cerebras Inference SDK.",
  },
  {
    href: "https://sdk.cerebras.ai",
    iconAlt: "SDK icon",
    title: "SDK",
    description:
      "Develop custom kernels and HPC applications for the world's largest chip using our low-level programming tools.",
  },
] as const;

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/cerebras-systems/",
    icon: embeddedAssets.iconLinkedIn,
    alt: "LinkedIn",
  },
  {
    href: "https://x.com/cerebrassystems",
    icon: embeddedAssets.iconX,
    alt: "X",
  },
] as const;

export function DocsHome() {
  const darkMode = useSyncExternalStore(
    subscribeToColorScheme,
    getColorSchemeSnapshot,
    () => false,
  );

  return (
    <div className={darkMode ? "dark" : undefined}>
      <div className="docs-shell min-h-screen min-w-[375px] w-full">
        <div className="mx-auto flex min-h-screen w-full max-w-[2000px] flex-col">
          <header className="flex items-center justify-between px-4 pt-4 pb-3 md:px-6 lg:px-16">
            <img
              src={darkMode ? embeddedAssets.logoLight : embeddedAssets.logoDark}
              alt="Cerebras"
              className="h-auto w-20 lg:w-28"
            />
            <div className="flex items-center justify-between gap-6">
              <a
                className="docs-cta inline-flex h-12 items-center justify-center gap-3 rounded-full px-6 text-[14px] font-medium text-white"
                href="mailto:support@cerebras.ai"
              >
                <span>Contact Us</span>
                <ExternalLinkIcon />
              </a>
            </div>
          </header>

          <main className="docs-copy flex flex-1 flex-col justify-center sm:pb-20">
            <section className="px-4 text-center xs:mb-8 md:mb-28 lg:mb-16 xl:mb-20">
              <p className="mx-auto my-0 mb-4 max-w-[650px] text-4xl font-bold">
                Cerebras Developer Documentation
              </p>
              <p className="mx-auto my-0 max-w-[500px] text-base">
                Find everything you need to get started with our products, including
                technical guides, examples, and API references.
              </p>
            </section>

            <section className="flex flex-wrap justify-center gap-4 px-4 xs:pt-4 sm:pt-10">
              {cards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="docs-card w-[328px] rounded-3xl p-8 sm:w-[296px] md:w-[352px] lg:w-[376px] xl:w-[560px]"
                >
                  <div className="mb-4 flex items-center justify-start">
                    {"icon" in card ? (
                      <img src={card.icon} alt={card.iconAlt} className="mr-3 h-6 w-6" />
                    ) : (
                      <div className="mr-3">
                        <SdkIcon />
                      </div>
                    )}
                    <span className="text-xl font-bold lg:text-2xl xl:text-2xl">
                      {card.title}
                    </span>
                    <img
                      src={darkMode ? embeddedAssets.arrowWhite : embeddedAssets.arrowDark}
                      alt=""
                      className="ml-auto h-6 w-6"
                    />
                  </div>
                  <p className="docs-card-copy text-sm">{card.description}</p>
                </a>
              ))}
            </section>
          </main>

          <footer className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-16">
            <div className="docs-muted text-[14px]">© 2026 Cerebras. All rights reserved</div>
            <div className="flex items-center justify-between gap-5">
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  <img src={link.icon} alt={link.alt} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
