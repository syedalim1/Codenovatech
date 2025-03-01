import AboutHeroSection from "../components/AboutPage/AboutHeroSection";
import Storysection from "../components/AboutPage/Storysection";
import Teamsection from "../components/AboutPage/Teamsection";
import PageSEO from "../components/SEO/PageSEO";

export default function About() {
  return (
    <div className="pt-24">
      <PageSEO 
        title="About CODENOVATECH | Leading AI & Software Company in Coimbatore" 
        description="Learn about CODENOVATECH - a pioneering AI and software development company in Coimbatore with a mission to transform businesses through innovative technology solutions. Founded by experienced tech experts, our team combines deep technical knowledge with domain expertise to deliver exceptional results. We're committed to excellence, innovation, and creating lasting partnerships with our clients across various industries."
        keywords="AI company Coimbatore, Codenovatech team, software development company history, startup story, tech innovation company, Coimbatore tech company, AI expertise, software engineers Coimbatore, product development team, Coimbatore IT professionals, AI researchers, data scientists, machine learning experts, Python developers, React developers, Node.js developers, full-stack engineers, mobile app developers, cloud solution architects, DevOps engineers, technology consultants Coimbatore, India tech talent, IT professionals Tamil Nadu, AI innovation leaders, software architects, UI/UX designers, quality assurance experts, Coimbatore tech ecosystem, South India IT company"
        canonicalUrl="https://codenovatech.in/about"
      />

      {/* Hero Section with Animation */}
      <AboutHeroSection />

      {/* Story Section */}
      <Storysection />

      {/* Team Section */}
      <Teamsection />
    </div>
  );
}
