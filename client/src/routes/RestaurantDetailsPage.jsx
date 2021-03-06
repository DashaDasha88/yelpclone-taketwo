import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import StarRating from "../components/StarRating";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

const RestaurantDetailsPage = () => {
  const {id} = useParams();
  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      } catch (err) {
        console.log(err);
      }
      fetchData();
    };

  }, []);

  return (
    <div>
      {selectedRestaurant && (
        <>
        <h1>{selectedRestaurant.restaurants.name}</h1>
          <div className="at-3">
            <Reviews reviews={selectedRestaurant.reviews}/>
          </div>
          <AddReview />
        </>
      )}
    </div>
  )
}

export default RestaurantDetailsPage;