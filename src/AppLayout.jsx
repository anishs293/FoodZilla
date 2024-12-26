/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */

import Body from "./components/Body";
import Header from "./components/Header";


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
