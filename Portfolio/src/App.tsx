import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import FirstSection from "./components/FirstSection";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <NavBar />
      <FirstSection />
      <About />
      <Portfolio />
      <Contact/>
    </>
  );
}

export default App;
