import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {

  const [restaurants, setRestaurants] = useState([]);
  const [selectdRestaurant, setSelectedRestaurant] = useState(null);

  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <RestaurantsContext.Provider value={{ 
      restaurants,
      setRestaurants, 
      addRestaurants,
      selectdRestaurant,
      setSelectedRestaurant
      }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};