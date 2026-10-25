import AboutMarquee from "../sections/about/AboutMarquee";
import AboutHero from "../sections/about/AboutHero";
import StorySection from "../sections/about/StorySection";
import PillarsSection from "../sections/about/PillarsSection";
import WorkflowSection from "../sections/about/WorkflowSection";
import LocationSection from "../sections/about/LocationSection";
import ContactCtaSection from "../sections/about/ContactCtaSection";

export default function AboutPage() {
  return (
    <>
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
