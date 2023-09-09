// console.log("Hii");
// const API_KEY="d1845658f92b31c64bd94f06f7188c9c";
// async function weather(){
//     let city="Mumbai";
//     const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appis=${API_KEY}&units=metric`);
//     const data=await response.json();
//     console.log("Weather ",data);
// }


// const userTab=document.querySelector("[data-userWeather]");
// const searchTab=document.querySelector("[data-searchWeather]");
// const userContainer=document.querySelector(".weather-container");

// const grantAccessContainer = document.querySelector(".grant-location-container");
// const searchForm = document.querySelector("[data-searchForm]");
// const loadingScreen = document.querySelector(".loading-container");
// const userInfoContainer = document.querySelector(".user-info-container");


const div = document.createElement("div");
div.className = "foo";

// our starting state: <div class="foo"></div>
console.log(div.outerHTML);

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10);

// false
console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");