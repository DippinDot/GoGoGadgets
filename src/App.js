import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Navbar } from "./Components/index";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
