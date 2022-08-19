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

const weatherHigh = document.querySelector('.weather-high');
const weatherLow = document.querySelector('.weather-low');
const weatherIcon = document.querySelector('.weather-icon > i');

var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/38824_PC?apikey=YUrexqRdU80vL162fqN0h9vRpp6DEEtZ');

xhr.responseType = 'json';

xhr.addEventListener('load', () => {
  const response = xhr.response;
  const iconAccuWeath = response.DailyForecasts[0].Day.IconPhrase;
  const highTempAccuWeath = response.DailyForecasts[0].Temperature.Maximum.Value;
  const lowTempAccuWeath = response.DailyForecasts[0].Temperature.Minimum.Value;

  if (iconAccuWeath === 'Sunny') {
    weatherIcon.className = 'fa-solid fa-sun fa-2xl';
  } else if (iconAccuWeath === 'Mostly Sunny') {
    weatherIcon.className = 'fa-solid fa-cloud-sun fa-2xl';
  } else if (iconAccuWeath === 'Partly Sunny') {
    weatherIcon.className = 'fa-solid fa-cloud-sun fa-2xl';
  } else if (iconAccuWeath === 'Intermittent Clouds') {
    weatherIcon.className = 'fa-solid fa-cloud-sun fa-2xl';
  } else if (iconAccuWeath === 'Hazy Sunshine') {
    weatherIcon.className = 'fa-solid fa-cloud-sun fa-2xl';
  } else if (iconAccuWeath === 'Mostly Cloudy') {
    weatherIcon.className = 'fa-solid fa-cloud-sun fa-2xl';
  } else if (iconAccuWeath === 'Cloudy') {
    weatherIcon.className = 'fa-solid fa-cloud" fa-2xl';
  } else if (iconAccuWeath === 'Dreary (Overcast)') {
    weatherIcon.className = 'fa-solid fa-cloud" fa-2xl';
  } else if (iconAccuWeath === 'Fog') {
    weatherIcon.className = 'fa-solid fa-cloud" fa-2xl';
  } else if (iconAccuWeath === 'Showers') {
    weatherIcon.className = 'fa-solid fa-cloud-showers-heavy fa-2xl';
  } else if (iconAccuWeath === 'Mostly Cloudy w/ Showers') {
    weatherIcon.className = 'fa-solid fa-cloud-showers-heavy fa-2xl';
  } else if (iconAccuWeath === 'Partly Sunny w/ Showers') {
    weatherIcon.className = 'fa-solid fa-cloud-sun-rain fa-2xl';
  } else if (iconAccuWeath === 'T-Storms') {
    weatherIcon.className = 'fa-solid fa-cloud-bolt fa-2xl';
  } else if (iconAccuWeath === 'Windy') {
    weatherIcon.className = 'fa-solid fa-wind fa-2xl';
  } else if (iconAccuWeath === 'Mostly Cloudy w/ T-Storms') {
    weatherIcon.className = 'fa-solid fa-cloud-bolt fa-2xl';
  } else if (iconAccuWeath === 'Partly Sunny w/ T-Storms') {
    weatherIcon.className = 'fa-solid fa-cloud-sun-rain fa-2xl';
  } else if (iconAccuWeath === 'Rain') {
    weatherIcon.className = 'fa-solid fa-cloud-rain fa-2xl';
  } else if (iconAccuWeath === 'Flurries') {
    weatherIcon.className = 'fa-solid fa-cloud fa-2xl';
  } else if (iconAccuWeath === 'Mostly Cloudy w/ Flurries') {
    weatherIcon.className = 'fa-solid fa-cloud fa-2xl';
  } else if (iconAccuWeath === 'Partly Sunny w/ Flurries') {
    weatherIcon.className = 'fa-solid fa-cloud-sun fa-2xl';
  } else if (iconAccuWeath === 'Snow') {
    weatherIcon.className = 'fa-solid fa-snowflake fa-2xl';
  } else if (iconAccuWeath === 'Mostly Cloudy w/ Snow') {
    weatherIcon.className = 'fa-solid fa-snowflake fa-2xl';
  } else if (iconAccuWeath === 'Ice') {
    weatherIcon.className = 'fa-solid fa-icicles fa-2xl';
  } else if (iconAccuWeath === 'Sleet') {
    weatherIcon.className = 'fa-solid fa-cloud-showers-heavy fa-2xl';
  } else if (iconAccuWeath === 'Freezing Rain') {
    weatherIcon.className = 'fa-solid fa-cloud-showers-heavy fa-2xl';
  } else if (iconAccuWeath === 'Rain and Snow') {
    weatherIcon.className = 'fa-solid fa-cloud-showers-heavy fa-2xl';
  }

  weatherHigh.textContent = highTempAccuWeath;
  weatherLow.textContent = lowTempAccuWeath;

});

xhr.send();
