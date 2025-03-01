import AboutHerosection from "../components/AboutPage/AboutHerosection";
import AboutValuessection from "../components/AboutPage/AboutValuessection";
import AboutStatssection from "../components/AboutPage/AboutStatssection";
import AboutTeamsection from "../components/AboutPage/AboutTeamsection";

export default function About() {
  return (
    <div className="">
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
