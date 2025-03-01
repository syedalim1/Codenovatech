import Herosection from "../components/HomePage/Herosection";
import Servicessection from "../components/HomePage/Servicessection";
import Statisticssection from "../components/HomePage/Statisticssection";
import Teamsection from "../components/HomePage/Teamsection";

export default function Home() {
  return (
    <div className="">
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
