import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "./HeroSection.css";
import { Model } from "../../Model/Model";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [tshirtColor, setTshirtColor] = useState("red");

  const changeColor = (color) => {
    setTshirtColor(color);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="heroMain">
        <div className="sectionleft">
          <p>Fresh Daily</p>
          <h1>Sweet Dreams Bakery</h1>
          <span>Premium Cakes & Desserts - Fresh Baked Daily with Love</span>
          <div className="heroLink">
            <Link to="/shop" onClick={scrollToTop}>
              <h5>Order Now</h5>
            </Link>
          </div>
        </div>
        <div className="sectionright">
          <Canvas
            className="canvasModel"
            camera={{ position: [0, 5, 15], fov: 50 }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={2.5}
              color={"white"}
            />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minAzimuthAngle={-Infinity}
              maxAzimuthAngle={Infinity}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />

            <Model color={tshirtColor} />
          </Canvas>
          <div className="heroColorBtn">
            <button
              onClick={() => changeColor("#8B4513")}
              style={{ backgroundColor: "#8B4513" }}
              title="Chocolate"
            ></button>
            <button
              onClick={() => changeColor("#FFB6C1")}
              style={{ backgroundColor: "#FFB6C1" }}
              title="Strawberry"
            ></button>
            <button
              onClick={() => changeColor("#FFFACD")}
              style={{ backgroundColor: "#FFFACD" }}
              title="Vanilla"
            ></button>
            <button
              onClick={() => changeColor("#DC143C")}
              style={{ backgroundColor: "#DC143C" }}
              title="Red Velvet"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
