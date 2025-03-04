import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="container">
      <section id="home">
        <Hero />
      </section>
        <Menu />
      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}

export default App;
