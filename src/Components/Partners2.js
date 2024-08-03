import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Partners2 = () => {
  return (
    <Carousel>
      <div>
        <img src="../Assets/partner1.png" alt="Legend 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="../Assets/partner1.png" alt="Legend 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="../Assets/partner1.png" alt="Legend 3" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

ReactDOM.render(<Partners2 />, document.querySelector(".demo-carousel"));

export default Partners2;
