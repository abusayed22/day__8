import { Routes, Route } from "react-router-dom";
import Header from "./components/fartials/Header";
import Home from "./components/Home";
import Add from "./components/Add";
import Read from "./components/Read";
import Single from "./components/Single";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_student" element={<Add />} />
        <Route path="/all_student" element={<Read />} />
        <Route path="/single_student/:id" element={<Read />} />
      </Routes>
    </div>
  );
}

export default App;
