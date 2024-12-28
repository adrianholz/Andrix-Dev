import CertificatesSection from "../ui/About/CertificatesSection/CertificatesSection";
import EducationSection from "../ui/About/EducationSection/EducationSection";
import ExperienceSection from "../ui/About/ExperienceSection/ExperienceSection";
import HeroSection from "../ui/About/HeroSection/HeroSection";
import InfoSection from "../ui/About/InfoSection/InfoSection";

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <ExperienceSection />
      <EducationSection />
      <CertificatesSection />
    </>
  );
}
