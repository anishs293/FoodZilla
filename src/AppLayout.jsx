/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */

import logo from "./assets/logo.png";
import resList from "./config/resList.json";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Foodzilla Logo" className="logo-image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
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
};

const Body = () => {
  console.log(resList);

  return (
    <>
      <div className="search">Search</div>
      <div className="restaurant-container">
        {resList.map((restaurant, index) => {
          return <RestaurantCard key={index} resData={restaurant.info} />;
        })}
      </div>
    </>
  );
};

function AppLayout() {
  return (
    <>
      <div className="app">
        <Header />
        <Body />
      </div>
    </>
  );
}

export default AppLayout;
