import { useState } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
const [celebrate, setCelebrate] = useState(false)
  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3333,
    stagger: 7,
    width: "8px",
    height: "8px",
    colors: ["#4d188e", "#1a7979", "#cdae32", "#a4394f", "#5ceb1f"],
  };

  const handleClick = () => {
    console.log("Let's CElebrate Good times C'mon!! 💃🏽🕺🏾🪩");
    setCelebrate(true)
    navigate("/");
  };
  console.log("Rendering Home component");
  return (
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
  );
};

export default Home;
