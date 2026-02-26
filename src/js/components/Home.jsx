import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("red");

  return (
    <div id="container">
      <div
        className={
          "trafficLight" +
          "text-center" +
          (color === "red"
            ? "lightGlow bg-danger border border-5 border-danger"
            : "bg-danger-subtle border-0")
        }
        onClick={() => setColor("red")}
      >
        {" "}
        R{" "}
      </div>
      <br />
      <div
        className={
          "trafficLight" +
          "text-center" +
          (color === "yellow"
            ? "lightGlow bg-warning border border-5 border-warning"
            : "bg-warning-subtle border-0")
        }
        onClick={() => setColor("yellow")}
      >
        {" "}
        Y{" "}
      </div>
      <br />
      <div
        className={
          "trafficLight" +
          "text-center" +
          (color === "green"
            ? "lightGlow bg-success border border-5 border-success"
            : "bg-success-subtle border-0")
        }
        onClick={() => setColor("green")}
      >
        {" "}
        G{" "}
      </div>
    </div>
  );
};

export default Home;
