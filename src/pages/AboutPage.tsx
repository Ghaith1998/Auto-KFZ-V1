import AboutMarquee from "../sections/about/AboutMarquee";
import AboutHero from "../sections/about/AboutHero";
import StorySection from "../sections/about/StorySection";
import PillarsSection from "../sections/about/PillarsSection";
import WorkflowSection from "../sections/about/WorkflowSection";
import LocationSection from "../sections/about/LocationSection";
import ContactCtaSection from "../sections/about/ContactCtaSection";
import Seo from "../components/Seo";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Über uns – Kfz-Teilehandel in Wien"
        description="Lernen Sie Meidlinger Autoteile kennen: persönliche Fachberatung und schnelle Ersatzteilbeschaffung für Privatkunden, Werkstätten und Flotten in Wien."
        path="/ueber-uns"
      />
      <AboutMarquee />
      <AboutHero />
      <StorySection />
      <PillarsSection />
      <WorkflowSection />
      <LocationSection />
      <ContactCtaSection />
    </>
  );
}
