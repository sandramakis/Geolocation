"use strict";

const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

const main = document.querySelector("main");
let latAndLong = document.createElement("p");

window.navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);

    //   update the speed
    data.coords.speed === null
      ? (speed.textContent = "Fetching more data...")
      : (speed.textContent = data.coords.speed);

    latAndLong.textContent = `Your Latitude is ${data.coords.latitude} and Longitude is ${data.coords.longitude}`;

    main.appendChild(latAndLong);

    // //   rotate the arrow
    console.log(arrow);

    arrow.style.transform = `rotate(${data.coords.heading}deg)`;

    console.log(data.coords.heading);
  },
  (err) => {
    console.error();
    alert("Hey, you gotta allow that to happen");
  }
);
