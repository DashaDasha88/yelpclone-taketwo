import React from "react";

const RestaurantList = () => {
  return (
    <div class="list-group">
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
          <tr>
            <td>Saigon Lotus</td>
            <td>Toronto</td>
            <td>$$</td>
            <td>Rating</td>
            <td><button className="btn btn-warning">Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList;