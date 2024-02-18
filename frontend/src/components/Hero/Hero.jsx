import React, { useState, useEffect } from 'react';
import layer5 from "./img/layer5.png";
import layer12 from "./img/layer12.png";
import layer2 from "./img/layer2.png";
import layer3 from "./img/layer3.png";
import layer4 from "./img/layer4.png";
import gradient1 from "./img/gradient1.png";
import foggy2 from "./img/foggy2.png";
import Background from "./img/Background.png";
import "./style.css";

const Hero = () => {
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [rotateDegree, setRotateDegree] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setXValue(e.clientX - window.innerWidth / 2);
      setYValue(e.clientY - window.innerHeight / 2);
      setRotateDegree((xValue / (window.innerWidth / 2)) * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [xValue]);

  return (
    <main className="relative bg-opacity-65 bg-brown h-screen w-screen overflow-hidden transition duration-500">
      <div className="vignette absolute z-2 w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      <div className='w-[130%] bg-black z-[5656]'>
      <img
        src={Background}
        data-speedx="0.3"
        data-speedy="0.28"
        data-speedz="0"
        data-rotation="0"
        data-distance="-500"
        alt=""
        className="parallax bg-img absolute w-130 top-7.5 left-1/2 transform -translate-x-1/2 z-1"
        style={{
          transform: `translateZ(${(xValue * 0.1)}px) translateX(calc(-50% - ${xValue * 0.3}px)) translateY(calc(-15% - ${yValue * 0.28}px)) rotateY(${rotateDegree * 0}deg)`,
          transition: '0.35s cubic-bezier(0.2,0.49,0.32,0.99)',
        }}
      />
      </div>

      <img
        src={gradient1}
        data-speedx="0.3"
        data-speedz="0"
        data-rotation=""
        data-distance="0"
        alt="0.28"
        className="Gradient-1 hide"
      />

      <img
        src={foggy2}
        data-speedx="0.2"
        data-speedy="0.25"
        data-speedz="0"
        data-rotation="0"
        data-distance="0"
        alt=""
        className="foggy2 hide"
        style={{
          transform: `translateZ(${(xValue * 0)}px) translateX(calc(-50% - ${xValue * 0.2}px)) translateY(calc(-15% - ${yValue * 0.25}px)) rotateY(${rotateDegree * 0}deg)`,
          transition: '0.35s cubic-bezier(0.2,0.49,0.32,0.99)',
        }}
      />

      <img
        src={layer12}
        data-speedx="0.12"
        data-speedy="0.16"
        data-speedz="0.25"
        data-rotation="0.03"
        data-distance="1200"
        alt=""
        className="parallax layer-1"
        style={{
          transform: `translateZ(${(xValue * 0.25)}px) translateX(calc(-50% - ${xValue * 0.12}px)) translateY(calc(-15% - ${yValue * 0.16}px)) rotateY(${rotateDegree * 0.03}deg)`,
          transition: '0.35s cubic-bezier(0.2,0.49,0.32,0.99)',
        }}
      />
<div className="txt parallax" style={{
  transform: `translateZ(${(xValue * 0)}px) translateX(calc(-50% - ${xValue * 0.18}px)) translateY(calc(-15% - ${yValue * 0.1}px)) rotateY(${rotateDegree * 0.3}deg)`,
  transition: '0.35s cubic-bezier(0.2,0.49,0.32,0.99)',
}}>
  <h3 className="text-gold font-medium text-7.5xl leading-9 mb-2.5">the<br />royal </h3>
  <h1 className="text-orange font-bold text-7xl leading-8">subasta </h1>
</div>

<img
  src={layer2}
  data-speedx="0.18"
  data-speedy="0.100"
  data-speedz="0.2"
  data-rotation="0.3"
  data-distance="2500"
  alt=""
  className="parallax layer-2 absolute w-120 top-17 left-1/2 transform -translate-x-1/2 z-5"
  style={{
    transform: `translateZ(${(xValue * 0.2)}px) translateX(calc(-50% - ${xValue * 0.18}px)) translateY(calc(-15% - ${yValue * 0.1}px)) rotateY(${rotateDegree * 0.3}deg)`,
    transition: '0.35s cubic-bezier(0.2,0.49,0.32,0.99)',
  }}
/>

<img
  src={layer3}
  data-speedx="0.20"
  data-speedy="0.13"
  data-speedz="0.17"
  data-rotation="0.2"
  data-distance="3150"
  alt=""
  className="parallax layer-3 absolute w-110 top-28 left-56 z-4"
  style={{
    transform: `translateZ(${(xValue * 0.17)}px) translateX(calc(-50% - ${xValue * 0.20}px)) translateY(calc(-15% - ${yValue * 0.13}px)) rotateY(${rotateDegree * 0.2}deg)`,
    transition: '0.35s cubic-bezier(0.2,0.49,0.32,0.99)',
  }}
/>

<img
  src={layer4}
  data-speedx="0.25"
  data-speedy="0.13"
  data-speedz="0.15"
  data-rotation="0.2"
  data-distance="3600"
  alt=""
  className="parallax layer-4 absolute w-full top-48 left-45 z-3"
  style={{
    transform: `translateZ(${(xValue * 0.15)}px) translateX(calc(-50% - ${xValue * 0.25}px)) translateY(calc(-15% - ${yValue * 0.13}px)) rotateY(${rotateDegree * 0.2}deg)`,
    transition: '0.35s cubic-bezier(0.2,0.49,0.32,0.99)',
  }}
/>

<img
  src={layer5}
  data-speedx="0.28"
  data-speedy="0.20"
  data-speedz="0.5"
  data-rotation="0.2"
  data-distance="4800"
  alt=""
  className="parallax layer-5 absolute w-147 top-20 left-51 z-2"
  style={{
    transform: `translateZ(${(xValue * 0.5)}px) translateX(calc(-50% - ${xValue * 0.28}px)) translateY(calc(-15% - ${yValue * 0.20}px)) rotateY(${rotateDegree * 0.2}deg)`,
    transition: '0.35s cubic-bezier(0.2,0.49,0.32,0.99)',
  }}
/>

      {/* Add similar JSX for other parallax elements */}
    </main>
  );
};

export default Hero;
