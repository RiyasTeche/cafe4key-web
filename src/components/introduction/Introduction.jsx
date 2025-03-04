import { TypeAnimation } from "react-type-animation";
import "./introduction.css";


const Introduction = () => {
  return (
    <div className="introduction">
      {/* TITLE */}
      <div className="title">
        {/* <h1>Flavor Feast: Pizza, Burgers, More!</h1> */}
        <h1> <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Flavour Feast: Pizza,Burgers,More!",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
           "Flavour Feast: Sandwiches & Pasta",
            1000,
            "Flavour Feast:GarlicBreads&Wraps",
            1000,
            "Flavour Feast: Fries & Snacks",
            1000,
            "Flavour Feast: Momos & Vadapavs",
            1000,
            "Flavour Feast:Mocktails,Tea &Coffie",
            1000,
            "Flavour Feast: Shakes,Waffle,More!",
            1000,
          ]}
          wrapper="span"
          speed={2}
          style={{color:"white"}}
          deletionSpeed={10}
          repeat={Infinity}
        /></h1>
        <div className="numberWrapper">
          <img src="/public/whatsapp.png" alt="" />
          <span>📞 +91 7994 422 644</span>
        </div>
      </div>
      {/* ANIMATED BUTTON */}
      <div className="animatedContainer">
        <svg
          viewBox="0 0 200 200"
          width="150"
          height="150"
          className="animatedButton"
        >
          <path
            id="circlePath"
            fill="none"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
          <text stroke="#dbc1ac"  strokeWidth=".5px" >
            <textPath href="#circlePath" startOffset="0%">
              Pizza • Burger • sandwich
            </textPath>
            <textPath href="#circlePath" startOffset="50%">
              Waffel • Smoothies • Shakes
            </textPath>
          </text>
        </svg>
        <button className="animatedMiddelButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="80"
            height="80"
            fill="none"
            stroke="white"
            strokeWidth="1"
          >
            <line x1="6" y1="18" x2="18" y2="6" />
            <polyline points="9 6 18 6 18 15" />
          </svg>
        </button>
        </div>
    </div>
  );
};

export default Introduction;
