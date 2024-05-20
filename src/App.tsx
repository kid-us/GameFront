import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import GameDetail from "./components/Games/GameDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<GameDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
