import React, { useState } from 'react';
import '../App.css'; // Import your CSS file

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="rating" title="Click to Rate: Your Opinion Matters!">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`star ${index < rating ? 'checked' : ''}`}
          onClick={() => handleStarClick(index)}
        >
          <i class="fa fa-regular fa-star fa-xs"></i>
          
        </div>
      ))}
    </div>
  );
};

export default Rating;
