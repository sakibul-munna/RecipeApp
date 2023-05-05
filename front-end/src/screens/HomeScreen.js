import React from "react";
import Slide from "../components/slide";
import Searchbar from "../components/SearchBar";

const HomeScreen = () => {
  return (
    <>
      <h2
        className="font-link"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        Nothing brings people together like GOOD FOOD!
      </h2>

      <Slide/>
      <Searchbar/>
    </>
  );
};
export default HomeScreen;
