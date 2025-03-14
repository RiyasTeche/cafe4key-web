import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";
// lazy loading for dynamic loading to get faster we pages

const Hero = lazy(() => import("./components/hero/Hero"));
const Menu = lazy(() => import("./components/menu/Menu"));
const Contact = lazy(() => import("./components/contact/Contact"));

function App() {
  return (
    <div className="container">
      <Suspense fallback="Loading...">
        <LazyLoad height={"100vh"}>
          <section id="home">
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>
     <Suspense fallback="Loading...">
        <LazyLoad height={"700vh"} offset={-100}>
          <Menu />
        </LazyLoad>
      </Suspense>
      <Suspense fallback="Loading...">
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="contact">
            <Contact />
          </section>
        </LazyLoad>
      </Suspense> 
    </div>
  );
}

export default App;
