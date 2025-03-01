import CallToAction from "../components/ServicesPage/CalltoAction";
import ServicesHeroSection from "../components/ServicesPage/ServicesHeroSection";
import ServicesbenefitsSection from "../components/ServicesPage/ServicesbenefitsSection";
import Servicessection from "../components/ServicesPage/Servicessection";
import PageSEO from "../components/SEO/PageSEO";

export default function Services() {
  return (
    <div className=" pt-24">
      <PageSEO 
        title="AI & Software Development Services in Coimbatore | CODENOVATECH" 
        description="Explore CODENOVATECH's comprehensive AI and software development services in Coimbatore. We offer Generative AI, Predictive Analytics, Computer Vision, Natural Language Processing, Full-Stack Development, Mobile App Development, Cloud Solutions, and custom enterprise software solutions tailored to your business requirements. Our experienced team delivers cutting-edge technology solutions for startups and established businesses."
        keywords="AI services Coimbatore, software development services, generative AI solutions, predictive analytics, computer vision services, AI consulting, custom software development, AI integration, enterprise software solutions, ML model development, machine learning services, Python development, React applications, mobile app development, iOS development, Android development, web application development, full-stack development, cloud integration services, digital transformation solutions, IT consulting Coimbatore, business automation tools, AI product development, technology outsourcing Coimbatore, NLP services, data analytics solutions, AI algorithm development, chatbot development, software migration services, DevOps services"
        canonicalUrl="https://codenovatech.in/services"
      />
      
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
