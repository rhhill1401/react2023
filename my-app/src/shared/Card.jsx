import React from "react";

function Card({ children, reverse }) {
  return (
    <div
      className='card'
      style={{
        backgroundColor: reverse ? "white" : "black",
        color: reverse ? "#333078" : "white",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
