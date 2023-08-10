import "./App.css";
import "./assets/css/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import WeatherApp from "./components/WeatherApp/weatherApp";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather-app" element={<WeatherApp />} />
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
