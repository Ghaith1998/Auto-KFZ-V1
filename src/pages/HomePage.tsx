import HeroSection from "../sections/home/HeroSection";
import TrustBanner from "../sections/home/TrustBanner";
import ProductsSection from "../sections/home/ProductsSection";
import RequestFormSection from "../sections/home/RequestFormSection";
import WhyUsSection from "../sections/home/WhyUsSection";
import TestimonialsSection from "../sections/home/TestimonialsSection";
import BottomCtaSection from "../sections/home/BottomCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBanner />
      <ProductsSection />
      <RequestFormSection />
      <WhyUsSection />
      <TestimonialsSection />
      <BottomCtaSection />
    </>
  );
}
