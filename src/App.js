import "./styles.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const options = ["Fruits", "Vegetable", "Pulses", "Snacks"];
  const tonavigate = useNavigate();
  // function handleChange(e) {
  //   const value = e.target.value;
  //   if (value === "Fruits") {
  //     tonavigate("Fruits");
  //   } else if (value === "Vegetable") {
  //     tonavigate("Vegetable");
  //   } else if (value === "Pulses") {
  //     tonavigate("Pulses");
  //   } else {
  //     tonavigate("Snacks");
  //   }
  // }
  return (
    <div className="App">
      <select style={{ backgroundColor: "grey" }}>
        <option>Start Your Shopping</option>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
      <img
        src="https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2017/12/Difference-Between-Mall-and-Shopping-Center-fig-2.jpg"
        alt="mall"
      />
    </div>
  );
}
