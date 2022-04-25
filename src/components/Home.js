import React from "react";
import { name, city } from "../data/data.js";

const h1Style = {
  color: "firebrick",
};

function Home() {
  return (
    <div id="home">
      <h1 style={h1Style}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
