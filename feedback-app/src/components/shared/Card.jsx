import React from 'react';
import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  //   return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#ffff',
        color: reverse ? '#ffff' : '#000',
      }}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
export default Card;
