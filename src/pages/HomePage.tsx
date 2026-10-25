import HeroSection from "../sections/home/HeroSection";
import TrustBanner from "../sections/home/TrustBanner";
import ProductsSection from "../sections/home/ProductsSection";
import RequestFormSection from "../sections/home/RequestFormSection";
import WhyUsSection from "../sections/home/WhyUsSection";
import TestimonialsSection from "../sections/home/TestimonialsSection";
import BottomCtaSection from "../sections/home/BottomCtaSection";
import Seo from "../components/Seo";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Kfz-Ersatzteile in Wien-Meidling"
        description="Meidlinger Autoteile: Kfz-Ersatzteile, Zubehör, Öle und Werkzeuge in 1120 Wien. Fachberatung, Expressbeschaffung und Abholung vor Ort."
        path="/"
      />
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
