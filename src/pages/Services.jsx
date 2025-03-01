import CallToAction from "../components/ServicesPage/CalltoAction";
import ServicesHeroSection from "../components/ServicesPage/ServicesHeroSection";
import ServicesbenefitsSection from "../components/ServicesPage/ServicesbenefitsSection";
import Servicessection from "../components/ServicesPage/Servicessection";

export default function Services() {
  return (
    <div className=" pt-24">
      {/* Hero Section with Animated Background */}
      <ServicesHeroSection />

      <div className="container-custom py-24">
        {/* Benefits Section */}
        <ServicesbenefitsSection />

        {/* Services Section */}

        <Servicessection />
      </div>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
