import type { ReactNode } from "react";

import { CtaBanner } from "@/components/landing/cta-banner";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { siteContent, type CtaBannerContent } from "@/content/site";
import { cn } from "@/lib/cn";

type SiteChromeProps = {
  children: ReactNode;
  ctaContent?: CtaBannerContent;
  mainClassName?: string;
  showCta?: boolean;
};

export function SiteChrome({
  children,
  ctaContent = siteContent.ctaBanner,
  mainClassName,
  showCta = true,
}: SiteChromeProps) {
  return (
    <>
      <Navbar
        brandName={siteContent.brandName}
        cta={siteContent.navigationCta}
        items={siteContent.navigation}
      />
      <main className={cn("overflow-x-clip pb-8 sm:pb-12", mainClassName)}>
        {children}
      </main>
      {showCta ? <CtaBanner content={ctaContent} /> : null}
      <Footer brandName={siteContent.brandName} content={siteContent.footer} />
    </>
  );
}
