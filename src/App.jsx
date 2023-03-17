import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/commons/Navbar";
import Footer from "./components/commons/Footer";
import Home from "./pages/Home";
import Notfound from "./components/commons/Notfound";
import About from "./pages/About";
import Jokes from "./pages/Jokes";
import Weather from "./pages/Weather";
import LoaderContextProvider from "./contexts/LoaderContextProvider";

function App() {
  return (
    <LoaderContextProvider>
      <Router>
        <div className="h-screen flex flex-col justify-between min-h-full">
          <Navbar />
          <main className="flex-1 px-8 my-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/jokes" element={<Jokes />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LoaderContextProvider>
  );
}

export default App;
