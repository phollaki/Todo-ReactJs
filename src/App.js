import "./App.css";
import Header from "./Header";
import Triangulr from "triangulr";
import React, { useRef, useEffect } from "react";
import Card from "./Card";

var colorRender = function (path) {
  var random = 32;
  var ratio = (path.x + path.y) / (path.cols + path.lines);
  var code = Math.floor(
    255 - ratio * (255 - random) - Math.random() * random
  ).toString(16);

  return "#" + code + "1092";
};
function App() {
  const triangleContainer = useRef(null);

  useEffect(() => {
    var svg = new Triangulr(
      window.innerWidth,
      window.innerHeight * 1.2,
      100,
      50,
      colorRender
    );
    triangleContainer.current.appendChild(svg);
  }, []);

  return (
    <div className="app" ref={triangleContainer} id="triangle_background">
      <Header />
      <Card />
    </div>
  );
}

export default App;
