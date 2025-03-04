import { TypeAnimation } from "react-type-animation";
import "./speech.css";

const Speech = () => {
  return (
    <div className="bubbleContainer">
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            // Same substring at the start will only be typed out once, initially
            "Pizzas: Handcrafted with authentic Italian techniques, topped with fresh ingredients, and infused with Indian spices for a flavorful twist.",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Burgers and Sandwiches: Juicy patties and fillings, seasoned with a blend of herbs and spices, served on freshly baked buns and bread.",
            1000,
            "Momos: Steamed dumplings filled with a variety of savory fillings, reflecting the fusion of Indian and Italian flavors.",
            1000,
            "Waffles: Crispy and golden, served with a range of toppings from classic maple syrup to exotic Indian-inspired flavors.",
            1000,
            "Milkshakes: Creamy and indulgent, available in classic flavors and unique combinations inspired by both cuisines.",
            1000,
            "Mojitos: Refreshing blends of mint, lime, and other flavors, perfect for a light and invigorating drink.",
            1000,
            "Tea and Coffee: A variety of brews to suit your preference, from traditional Indian chai to rich Italian espresso.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/public/man.png" alt="" />
    </div>
  );
};

export default Speech;
