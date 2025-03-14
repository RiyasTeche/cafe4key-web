import "./heroMain.css";
import Speech from "../../components/speech/Speech";
import BurgerModelContainer from "./burger/BurgerModelContainer";

import Model3d from "../../components/model3d/Model3d";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import PizzaModelContainer from "./pizza/PizzaModelContainer";
import PizzaTwoModelContainer from "./pizzaTwo/PizzaTwoModelContainer";

const HeroMain = () => {
  const dayNumber = new Date().getDate();
  return (
    <>
      <div className="heroMain">
        <div className="heroContainer">
          {dayNumber % 3 === 1 ? (
            <BurgerModelContainer />
          ) : dayNumber % 3 === 2 ? (
            <PizzaTwoModelContainer />
          ) : (
            <PizzaModelContainer />
          )}
          <div className="container3d">
            <Canvas>
              <Suspense fallback="Loading..">
                <Model3d />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <div className="heroLinkContainer">
          <Speech />
          <div className="linksContainer">
            <h2>&quot;Italian Passion, Indian Spice&quot;</h2>
            <p>Where Italy Meets India on Your Plate.</p>
            <div className="awardList">
              <a
                href="https://www.instagram.com/hunger_hackers_bangalore/"
                target="_blank"
              >
                <img src="./award1.png" alt="instagram" title="instagram" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61571142942873"
                target="_blank"
              >
                <img src="./award2.png" alt="facebook" title="facebook" />
              </a>
              <a
                href="https://maps.app.goo.gl/J2vgbDP1oh5Q6FgE6?g_st=iwb"
                target="_blank"
              >
                <img src="./award3.png" alt="Location" title="Locate Us" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroMain;
