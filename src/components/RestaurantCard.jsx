/* eslint-disable react/prop-types */
import React from "react";

function RestaurantCard({resData}) {
    if (!resData) {
        return null;
    }

    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        sla: { deliveryTime },
    } = resData;

    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="Restaurant Logo"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    cloudinaryImageId
                }
            />
            <h3 className="res-title">{name}</h3>
            <p className="res-type">{cuisines.join(", ")}</p>
            <div className="res-info">
                <span className="res-rating">⭐ {avgRating}</span>
                <span className="res-time">⏱ {deliveryTime}</span>
            </div>
        </div>
    );
}

export default RestaurantCard;
