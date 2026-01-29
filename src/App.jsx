import Header from "./components/Header";
import About from "./sections/About";
import Hero from "./sections/Hero";

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
      </main>

      {/* Footer */}
    </div>
  );
};

export default App;
