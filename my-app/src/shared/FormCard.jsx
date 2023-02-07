import React from "react";

function FormCard({ children, reverse }) {
  return (
    <div
      style={{
        backgroundColor: reverse ? "white" : "black",
        color: reverse ? "#333078" : "white",
      }}
      className='formBox'
    >
      {children}
    </div>
  );
}

FormCard.propTypes = {};

export default FormCard;
