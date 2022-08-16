// hamburger functionality
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const weatherWidget = document.querySelector('.weather');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    weatherWidget.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
};

navSlide();
/*
// accuweather API
const weatherHigh = document.querySelector('.weather-high');
const weatherLow = document.querySelector('.weather-low');

var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/38824_PC');

xhr.responseType = 'json';

xhr.addEventListener('load', () => {
  console.log(xhr.status);
  console.log(xhr.response);
});
*/
