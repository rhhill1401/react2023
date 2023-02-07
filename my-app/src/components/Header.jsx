import React from "react";
import PropTypes from "prop-types";

const Header = ({ textFont, textColor }) => {
  const headerStyle = {
    color: textColor,
    fontFamily: textFont,
    marginTop: 20,
  };
  return (
    <div className='container' style={headerStyle}>
      <h1>Products</h1>
    </div>
  );
};

Header.defaultProps = {
  textColor: "#333078",
  textFont: "Cadiz regular",
};
Header.propTypes = {
  textFont: PropTypes.string.isRequired,
};

export default Header;
