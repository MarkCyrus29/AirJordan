import Navbar from "./components/Navbar/navbar";
import ScrollSection from "./components/Carousel/ScrollSection";
import gsap from "gsap";
window.gsap = gsap; // ✅ Makes GSAP accessible in DevTools

function App() {
  
  return (
    <>
      <Navbar />
      <ScrollSection />
    </>
  );
}

export default App;
