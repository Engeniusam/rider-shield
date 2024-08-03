import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";

function App() {
  const tawkMessengerRef = useRef();
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

  const onLoad = () => {
    setIsTawkLoaded(true);
    console.log("Tawk.to API loaded");
  };

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
      <TawkMessengerReact
        propertyId="29f1ecd108939ae6b0aa6fa3ec29549589839b4e"
        widgetId="1i4ctovia"
        ref={tawkMessengerRef}
        onLoad={onLoad}
      />
    </div>
  );
}

export default App;
