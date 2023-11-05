

import React from 'react';

const Gallery = ({ data }) => {
  const imageContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const imageStyle = {
    margin: '10px',
    width: 'calc(33.33% - 20px)',
    transition: 'transform 0.3s',
  };

  const handleMouseEnter = (event) => {
    event.currentTarget.style.transform = 'scale(1.2)'; // Adjust the scale value for the zoom effect
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div className="row" style={imageContainerStyle}>
      {data.map((image) => (
        <div
          key={image.id}
          style={imageStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
            alt={image.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
