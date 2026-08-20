import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Prestazioni from "./components/Prestazioni";
import Contatti from "./components/Contatti";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Prestazioni />
      <Contatti />
      <Footer />
    </>
  );
}

export default App;
