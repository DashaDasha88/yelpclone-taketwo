import React from "react";

const StarRating = ({rating}) => {
  const starts =[];

  for (let i = 1; i <= 5; i++){
    if (i <= rating) {
      starts.push(<i class="fas fa-star"></i>);
    } else if (i === Math.ceil(rating) && Number.isInteger(rating)){
      starts.push(<i class="far fa-star-half-alt"></i>);
    } else {
      starts.push(<i class="far fa-star"></i>);
    }
  }

  return (
    <>stars</>
  );

};

export default StarRating;