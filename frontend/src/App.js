import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";
import Navbar from "./components/Navbar";
import HighSpenders from "./components/HighSpendors";
import Signin from './components/GoogleSignin/Signin'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Signin/>} />
          <Route path="/all" element={<Read/>} />
          <Route path="/:id" element={<Update/>} />
          <Route path="/high-spenders" element={<HighSpenders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;