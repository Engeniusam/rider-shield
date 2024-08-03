import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";

function App() {
  const [isTawkLoaded, setIsTawkLoaded] = useState(false);

  const handleMinimize = () => {
    if (
      isTawkLoaded &&
      window.Tawk_API &&
      typeof window.Tawk_API.minimize === "function"
    ) {
      window.Tawk_API.minimize();
    } else {
      console.error(
        "Tawk_API is not loaded or minimize function is not available."
      );
    }
  };

  // Check if Tawk.to API is loaded
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (window.Tawk_API) {
        setIsTawkLoaded(true);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Router basename="/Rider-Shield">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <button onClick={handleMinimize}>Minimize the Chat</button>
    </div>
  );
}

export default App;
