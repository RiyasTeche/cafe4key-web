import Header from "../header/Header";
import Introduction from "../introduction/Introduction";
// import Navbar from '../navbar/Navbar'
import HeroMain from "../heroMain/HeroMain";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        {/* HEADER */}
        <Header />
        {/* INTRODUCTION */}
        <Introduction />
        {/* NAVBAR */}
        {/* <Navbar/> */}
        {/* HOME SECTION */}
        {/* <HeroMain /> */}
      </div>
    </>
  );
};

export default Hero;
