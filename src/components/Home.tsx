import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
// import Pagination from "../components/Pagination";
function App() {
  return (
    // 675af585f19843d596b1f429b55d94e7
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
