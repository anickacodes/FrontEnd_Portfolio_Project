import { useState } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [celebrate, setCelebrate] = useState(false);
  const confettiConfig = {
    angle: 620,
    spread: 500,
    startVelocity: 22,
    elementCount: 200,
    dragFriction: 0.422,
    duration: 7133,
    stagger: 7,
    width: "50%",
    height: "44%",
    colors: ["#4d188e", "#1a7979", "#ffe065", "#a4394f", "#a3f77f"],
  };

  const handleClick = () => {
    console.log("Let's CElebrate Good times C'mon!! 💃🏽🕺🏾🪩");
    setCelebrate(true);
    navigate("/");
  };
  //   console.log("Rendering Home component");
  return (
    <div>
      <h2
        style={{
          color: "teal",
          fontWeight: "bolder",
          display: "block",
          border: "2px gray outset",
        }}
      >
        <button onClick={handleClick}> Bonjour </button>
        <Confetti active={setCelebrate} config={confettiConfig} />
      </h2>

      <h2> GRAND OPENING </h2>
    </div>
  );
};

export default Home;

// https://alampros.github.io/react-confetti/?path=/story/props-demos--knobs&knob-Run=true&knob-Recycle=true&knob-# Pieces=270&knob-Wind=0.042&knob-Gravity=0.22&knob-Initial X=2.9&knob-Initial Y=8.9&knob-Opacity=100
