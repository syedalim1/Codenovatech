import AboutHerosection from "../components/AboutPage/AboutHerosection";
import AboutValuessection from "../components/AboutPage/AboutValuessection";
import AboutStatssection from "../components/AboutPage/AboutStatssection";
import AboutTeamsection from "../components/AboutPage/AboutTeamsection";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 pt-24">
      {/* Hero section */}
      <AboutHerosection />
      {/* Values section */}
      <AboutValuessection />
      {/* Stats section */}
      <AboutStatssection />
      {/* Team section */}
      <AboutTeamsection />
    </div>
  );
}
