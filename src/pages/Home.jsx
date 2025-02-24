import Herosection from "../components/HomePage/Herosection";
import LatestNewssection from "../components/HomePage/LatestNewssection";
import Servicessection from "../components/HomePage/Servicessection";
import Statisticssection from "../components/HomePage/Statisticssection";
import Teamsection from "../components/HomePage/Teamsection";
import Testimonialssection from "../components/HomePage/Testimonialssection";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <Herosection />
      {/* Services Section */}
      <Servicessection />

      {/* Testimonials Section */}
      <Testimonialssection />

      {/* Latest News Section */}
      <LatestNewssection />

      {/* Team Section */}
      <Teamsection />

      {/* Statistics Section */}
      <Statisticssection />
    </div>
  );
}
