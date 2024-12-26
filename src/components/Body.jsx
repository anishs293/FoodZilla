import React from "react";
import resList from "../config/resList.json";
import RestaurantCard from "./RestaurantCard";

function Body() {
    return (
        <>
            <div className="search">Search</div>
            <div className="restaurant-container">
                {resList.map((restaurant) => {
                    return (
                        <RestaurantCard
                            key={restaurant.info.id}
                            resData={restaurant.info}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Body;
