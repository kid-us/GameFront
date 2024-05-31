import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import GameDetail from "./components/Games/GameDetail";
import Page404 from "./components/Page404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<GameDetail />}></Route>
        <Route path="/404" element={<Page404 />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </>
  );
}

export default App;
