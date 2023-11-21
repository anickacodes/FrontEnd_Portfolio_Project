import { useState } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [celebrate, setCelebrate] = useState(false);

  const confettiConfig = {
    angle: 600,
    spread: 50,
    startVelocity: 14,
    elementCount: 220,
    dragFriction: 0.422,
    duration: 7133,
    stagger: 8,
    width: "44%",
    height: "24%",
    colors: ["#4d188e", "#1a7968", "#ffe065", "#a4394f", "#a3f77f"],
  };

  const handleClick = () => {
    alert("Thank you for your existence\nYou are home!");
    setCelebrate(true);
    navigate("/");
  };

  return (
    <div className="wrapper">
      <div className="home">
        <h2 className="greeting">
          <button onClick={handleClick}>
            Welcome to our Grand Opening Site
          </button>
          <Confetti active={setCelebrate} config={confettiConfig} />
        </h2>
      </div>
    </div>
  );
};

export default Home;
