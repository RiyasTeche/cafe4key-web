import "./menu.css";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

import MenuItems from "../../Menu.json";

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const MenuItem = ({ item }) => {
  const refItem = useRef(null);

  //For animation checking is it in view oe not
  const isInView = useInView(refItem, { margin: "-100px" });

  return (
    <div className="mItem" ref={refItem}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <div
        className="pText"
      >
        <h1>
          {item.title}
          {item?.startingPrice && (
            <div className="badge">
              <p>Now get only</p>
              <span>{item?.startingPrice}</span>
            </div>
          )}
        </h1>
        <p>{item.desc}</p>
        <div className="menuItemsType">
          {item?.vegMenu.map((menu) => (
            <span className="menuTypeLabel veg" key={menu.name}>
              {menu.name}
            </span>
          ))}
        </div>
        <div className="menuItemsType">
          {item?.NonVeg.map((menu) => (
            <span className="menuTypeLabel nonVeg" key={menu.name}>
              {menu.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  
  const ref = useRef(null);
  //For removing progress bar checking in view or not
  const isInView = useInView(ref, { margin: "-100px" });

  const { scrollYProgress } = useScroll({ target: ref });
  //Find y progress and maps in to xprogress with finding window width for different screen size
  const xTrasitionValue = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * MenuItems.length]
  );
  //find the boundries between elements
  const [containerDistance, setContainerDistance] = useState(0);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };

  }, []);


  return (
    <div className="menu" ref={ref}>
      {/* Y VALUE TRANSLATE TO X VALUE */}
      <motion.div className="mList" style={{ x: xTrasitionValue }}>
        {/* creating empty div for balancing frames*/}
        <div
          className="empty"
          style={{ width: window.innerWidth - containerDistance }}
        />
        {MenuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
        ;
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="mProgress" style={ isInView ? { display:"block"}:{display:"none"}}>
      <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={10}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={10}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Menu;
