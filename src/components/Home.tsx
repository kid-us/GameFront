import Intro from "../components/Intro";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Intro />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
