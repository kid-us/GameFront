import Intro from "../components/Intro";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer/Footer";
// import Pagination from "../components/Pagination";
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Intro />
        <Hero />
        {/* <Pagination /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
