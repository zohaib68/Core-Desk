import { LandingLayout } from "@/components/landing/templates/landingPageLayout";
import { HeroSection } from "@/components/landing/organisms/heroSection";
import { FeaturesSection } from "@/components/landing/organisms/featuresSection";
import { CTASection } from "@/components/landing/organisms/ctaSection";
import { Footer } from "@/components/landing/organisms/footer";

export default function Page() {
  return (
    <LandingLayout>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </LandingLayout>
  );
}