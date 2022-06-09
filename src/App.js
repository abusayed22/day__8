import { Routes, Route } from "react-router-dom";
import Header from "./components/fartials/Header";
import Home from "./components/Home";
import Add from "./components/Add";
import Read from "./components/Read";
import Single from "./components/Single";
import axios from "axios";

function App() {

  axios.defaults.baseURL="http://127.0.0.1:8000";
  axios.defaults.headers.post['Accept'] = "application/json";

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_student" element={<Add />} />
        <Route path="/all_student" element={<Read />} />
        <Route path="/single_student/:id" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
