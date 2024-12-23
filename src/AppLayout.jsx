// import './App.css'
import logo from "./assets/logo.png";

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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="Restaurant Logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpchdp0XlADE2A2TZ0UauStn-fBiiROMXtXw&s"
      />
      <h3 className="res-title">Cinnabon</h3>
      <p className="res-type">Bakery, Cafe</p>
      <div className="res-info">
        <span className="res-rating">⭐ 4.4</span>
        <span className="res-time">⏱ 38 minutes</span>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
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
