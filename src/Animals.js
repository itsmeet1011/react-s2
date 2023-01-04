import { useState } from "react";

import "./animalsShows.css";

import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import gator from "./svg/gator.svg";
import dog from "./svg/dog.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {
  // bird:bird key and value is same for that short form is use
  bird,
  cat,
  cow,
  gator,
  dog,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handelClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handelClick}>
      {/* as in the svgMap object with key and value same */}
      <img className="animal" alt="animal" src={svgMap[type]} />

      <img
        className="heart"
        alt="hearts"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
