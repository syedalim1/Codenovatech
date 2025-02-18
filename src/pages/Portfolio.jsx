import PortfolioHeroSection from "../components/PortfolioPage/PortfolioHeroSection";
import Projects from "../components/PortfolioPage/Projects";

export default function Portfolio() {
  return (
    <div className=" pt-24">
      {/* Hero Section with Animated Background */}
      <PortfolioHeroSection />
      <Projects />
    </div>
  );
}
