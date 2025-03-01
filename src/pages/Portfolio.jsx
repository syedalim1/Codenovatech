import PortfolioHeroSection from "../components/PortfolioPage/PortfolioHeroSection";
import Projects from "../components/PortfolioPage/Projects";
import PageSEO from "../components/SEO/PageSEO";

export default function Portfolio() {
  return (
    <div className=" pt-24">
      <PageSEO 
        title="AI & Software Development Portfolio | CODENOVATECH Coimbatore" 
        description="Explore CODENOVATECH's impressive portfolio of innovative AI and software development projects. Discover how our team of experts has delivered cutting-edge technology solutions for businesses across various industries including healthcare, finance, retail, manufacturing, and education. From custom enterprise applications to AI-powered tools, mobile apps, and web platforms, see how our tailored solutions have helped businesses in Coimbatore and beyond transform their operations and achieve digital excellence."
        keywords="AI projects portfolio, software development case studies, Coimbatore tech projects, custom software examples, AI solutions showcase, enterprise application portfolio, mobile app development showcase, web development projects, technology solutions portfolio, machine learning implementations, AI success stories, custom software portfolio, digital transformation examples, business automation projects, healthcare software solutions, fintech applications, retail tech solutions, manufacturing software projects, educational technology applications, CRM system development, ERP implementation, AI chatbot projects, predictive analytics solutions, data visualization tools, cloud migration case studies, DevOps implementation, software modernization projects, Coimbatore software company projects, IT project gallery, business intelligence solutions"
        canonicalUrl="https://codenovatech.in/Work"
      />
      
      {/* Hero Section with Animated Background */}
      <PortfolioHeroSection />
      <Projects />
    </div>
  );
}
