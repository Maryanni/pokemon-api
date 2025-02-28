import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from "./store/context";
import "./App.css";
import Home from "./views/Home";
import List from "./views/List";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
