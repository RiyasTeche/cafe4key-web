import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span>Links •</span>
        <a href="#home">
          <button>Home 🏠</button>
        </a>
        <a href="#menu">
          <button>Menu 🗒️</button>
        </a>
        <a href="#contact">
          <button>Contact 📧</button>
        </a>
        <a href="#contact">
          <button>Locate us 📍</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
