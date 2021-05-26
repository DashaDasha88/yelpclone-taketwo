import React from "react";

const StarRating = ({rating}) => {
  const starts =[];

  for (let i = 1; i <= 5; i++){
    if (i <= rating) {
      starts.push(<i class="fas fa-star text-warning"></i>);
    } else if (i === Math.ceil(rating) && Number.isInteger(rating)){
      starts.push(<i class="far fa-star-half-alt text-warning"></i>);
    } else {
      starts.push(<i class="far fa-star text warning"></i>);
    }
  }

  return (
    <>stars</>
  );

};

export default StarRating;