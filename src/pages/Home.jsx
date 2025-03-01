import Herosection from "../components/HomePage/Herosection";
import Servicessection from "../components/HomePage/Servicessection";
import Statisticssection from "../components/HomePage/Statisticssection";
import Teamsection from "../components/HomePage/Teamsection";
import PageSEO from "../components/SEO/PageSEO";

export default function Home() {
  return (
    <div className="">
      <PageSEO 
        title="Top AI & Software Development Company in Coimbatore | CODENOVATECH" 
        description="CODENOVATECH is a leading AI and software development company based in Coimbatore, India. We specialize in innovative, AI-driven software solutions for startups and enterprises including machine learning, generative AI, computer vision, natural language processing, and full-stack development solutions. Transform your business with our cutting-edge technology services."
        keywords="AI solutions Coimbatore, software development company, digital transformation, product-based IT company, custom software development, artificial intelligence services, Coimbatore startup, technology innovation, machine learning services, AI consulting Coimbatore, cloud solutions, IT outsourcing, app development Coimbatore, business intelligence solutions, data analytics services, IT services Coimbatore, tech startup, software engineering, enterprise solutions, generative AI experts, computer vision development, NLP solutions, web application development, mobile app development Coimbatore, AI-powered business tools"
        canonicalUrl="https://codenovatech.in/"
      />
      
      {/* Hero Section */}
      <Herosection />
      {/* Services Section */}
      <Servicessection />


      {/* Latest News Section */}
      {/* <LatestNewssection /> */}

      {/* Team Section */}
      <Teamsection />

      {/* Statistics Section */}
      <Statisticssection />
    </div>
  );
}
