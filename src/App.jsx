import Header from "./components/Header";
import About from "./sections/About";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Work from "./sections/Work";

const App = () => {
  return (
    <div className="min-h-screen bg-amber-50 ">
      {/* Header */}
      <Header />

      {/* Main */}
      <main id="main-content" className="max-w-8xl mx-auto">
        {/* Sections */}
        <Hero />
        <About />
        <Gallery />
        <Work />
        <Services />
      </main>

      {/* Footer */}
    </div>
  );
};

export default App;
