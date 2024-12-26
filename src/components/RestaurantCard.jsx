/* eslint-disable react/prop-types */
import React from "react";
import { CDN_URL } from "../config/constants";

function RestaurantCard({resData}) {
    if (!resData) {
        return null;
    }

    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId:IMAGE_ID,
        sla: { deliveryTime },
    } = resData;

    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="Restaurant Logo"
                src={
                    CDN_URL +
                    IMAGE_ID
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
