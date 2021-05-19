import React, { useEffect, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantContext";

const RestaurantList = (props) => {

  const {restaurants, setRestaurants} = useContext(RestaurantsContext);

  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await RestaurantFinder.get("/")
        setRestaurants(response.data.data.restaurants);

      } catch (err) {}
    };
    
    fetchData();

  }, []);

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scopr="col">Restaurant</th>
            <th scopr="col">Location</th>
            <th scopr="col">Price Range</th>
            <th scopr="col">Ratings</th>
            <th scopr="col">Edit</th>
            <th scopr="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => {
            return (
              <tr>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                <td>Reviews</td>
                <td><button className="btn btn-warning">Update</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
              </tr>
            );
          })}
          {/* <tr>
            <td>Saigon Lotus</td>
            <td>Toronto</td>
            <td>$$</td>
            <td>Rating</td>
            <td><button className="btn btn-warning">Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList;