/* eslint-disable @next/next/no-img-element */
import { embeddedAssets } from "@/lib/embedded-assets";

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5"
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

function ExploreArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 25"
      className="h-[25px] w-[32px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="32" height="25" rx="2" fill="#F15A29" />
      <path
        d="M10 12.5H20M16.25 8.75L20 12.5L16.25 16.25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cards = [
  {
    href: "https://training-docs.cerebras.ai",
    title: "Training",
    ctaLabel: "Explore training",
    description:
      "Effortlessly train and fine-tune large AI models with Cerebras PyTorch and ModelZoo, powered by the world's largest AI-optimized processor.",
  },
  {
    href: "https://inference-docs.cerebras.ai",
    title: "Inference",
    ctaLabel: "Explore inference",
    description:
      "Build LLM applications with the world's fastest inference solution using the Cerebras Inference SDK.",
  },
  {
    href: "https://sdk.cerebras.ai",
    title: "SDK",
    ctaLabel: "Explore SDK",
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
  return (
    <div className="docs-shell min-h-screen min-w-[375px] w-full">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[2000px] flex-col overflow-hidden">
        <img
          src="/header-graphic.png"
          alt=""
          className="pointer-events-none absolute right-0 top-0 z-0 hidden w-[980px] max-w-none select-none lg:block xl:w-[1040px]"
        />

        <header className="relative z-20 flex items-center justify-between bg-transparent px-4 pt-5 pb-3 md:px-8 xl:px-[103px]">
          <a href="https://cerebras.ai" aria-label="Cerebras home">
            <picture>
              <source media="(prefers-color-scheme: dark)" srcSet={embeddedAssets.logoLight} />
              <img
                src={embeddedAssets.logoDark}
                alt="Cerebras"
                className="h-auto w-[94px] md:w-[104px] xl:w-[116px]"
              />
            </picture>
          </a>
          <div className="flex items-center gap-4">
            <a
              className="docs-cta inline-flex h-10 items-center justify-center gap-2 rounded-full px-4 text-[12px] font-medium md:h-[35px] md:px-3.5"
              href="mailto:support@cerebras.ai"
            >
              <span>Contact Us</span>
              <ExternalLinkIcon />
            </a>
          </div>
        </header>

        <main className="docs-copy relative z-10 flex flex-1 flex-col px-4 pb-10 md:px-8 xl:px-[103px]">
          <section className="relative pt-6 pb-8 md:pt-8 md:pb-4 xl:min-h-[360px] xl:pt-6">
            <div className="relative z-10 max-w-[635px] pt-10 md:pt-16 xl:pt-[72px]">
              <h1 className="max-w-[560px] text-[44px] leading-[0.96] font-normal tracking-[-0.04em] uppercase sm:text-[52px] md:text-[58px] xl:text-[64px]">
                Developer
                <br />
                Documentation
              </h1>
              <p className="mt-5 max-w-[530px] text-[16px] leading-[1.45] font-medium md:mt-6">
                Find everything you need to get started with our products, including
                technical guides, examples, and API references.
              </p>
            </div>
          </section>

          <section className="grid gap-1.5 pt-2 md:pt-4 lg:grid-cols-3">
            {cards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="docs-card flex min-h-[280px] flex-col rounded-[5px] px-5 py-5 md:min-h-[280px] md:px-7 md:py-7 xl:min-h-[280px]"
              >
                <div className="max-w-[400px]">
                  <h2 className="text-[22px] leading-[1.1] font-medium md:text-[20px]">
                    {card.title}
                  </h2>
                  <p className="docs-card-copy mt-4 max-w-[400px] text-[15px] leading-[1.3] font-medium">
                    {card.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-[14px] pt-10">
                  <ExploreArrowIcon />
                  <span className="text-[16px] leading-none font-medium">{card.ctaLabel}</span>
                </div>
              </a>
            ))}
          </section>
        </main>

        <footer className="relative z-10 flex items-center justify-between px-4 py-5 md:px-8 xl:px-[103px]">
          <div className="docs-muted text-[12px] md:text-[13px]">© 2026 Cerebras. All rights reserved</div>
          <div className="flex items-center gap-4 md:gap-5">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href}>
                <img src={link.icon} alt={link.alt} className="h-[18px] w-[18px] md:h-5 md:w-5" />
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
