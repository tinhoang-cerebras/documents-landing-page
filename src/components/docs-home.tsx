"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useSyncExternalStore } from "react";
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
  const systemPrefersDark = useSyncExternalStore(
    subscribeToColorScheme,
    getColorSchemeSnapshot,
    () => false,
  );
  const [manualOverride, setManualOverride] = useState<boolean | null>(null);
  const darkMode = manualOverride ?? systemPrefersDark;

  return (
    <div className={darkMode ? "dark" : undefined}>
      <div className="docs-shell flex min-h-screen min-w-[375px] w-full flex-col">
        <header className="flex items-center justify-between px-4 pt-4 pb-3 md:px-6 lg:px-16">
          <img
            src={darkMode ? embeddedAssets.logoLight : embeddedAssets.logoDark}
            alt="Cerebras"
            className="h-auto w-20 lg:w-28"
          />
          <div className="flex items-center justify-between gap-6">
            <a
              className="docs-accent flex h-9 w-[120px] items-center justify-between rounded-full px-4 text-[14px] text-white"
              href="mailto:support@cerebras.ai"
            >
              <span>Contact Us</span>
              <img src={embeddedAssets.arrowWhite} alt="" className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label="Toggle color scheme"
              className="docs-toggle h-5 w-5 cursor-pointer"
              onClick={() => setManualOverride((current) => !(current ?? systemPrefersDark))}
            >
              <img
                src={darkMode ? embeddedAssets.iconSun : embeddedAssets.iconMoon}
                alt=""
              />
            </button>
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
                className="docs-card w-[328px] rounded-3xl p-8 shadow-md sm:w-[296px] md:w-[352px] lg:w-[376px] xl:w-[560px]"
              >
                <div className="mb-4 flex items-center justify-start">
                  <img src={card.icon} alt={card.iconAlt} className="mr-3 h-6 w-6" />
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
          <div className="docs-muted text-[14px]">© 2024 Cerebras. All rights reserved</div>
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
  );
}
