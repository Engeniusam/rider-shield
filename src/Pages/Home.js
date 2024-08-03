import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Partners from "../Components/Partners";
// import Partners2 from "../Components/Partners2";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <About />
      <Info />
      <BookAppointment />
      <Reviews />
      <Partners />
      {/* <Partners2 /> */}
      <Footer />
    </div>
  );
}

export default Home;
