let countryInput = document.querySelector('input.country-input');
let cityInput = document.querySelector('input.city-input');
let button = document.querySelector('button');
let date = document.querySelector('.date');
let city = document.querySelector('.city');
let fajrTime = document.querySelector('.F-time');
let dhuhrTime = document.querySelector('.D-time');
let asrTime = document.querySelector('.A-time');
let maghribTime = document.querySelector('.M-time');
let ishaTime = document.querySelector('.I-time');
const Api = "https://api.aladhan.com/v1/timingsByCity?";

button.addEventListener('click', () => {
  let countryValue = `${countryInput.value}`;
  let cityValue = `${cityInput.value}`;
if (countryValue == "" && cityValue == "") {
  alert("Please Enter City Name");
} else {
  fetch(Api + `city=${cityValue}&country=${countryValue}&method=8`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((full) => {
      date.innerHTML = full.data.date.readable;
      city.innerHTML = full.data.meta.timezone;
      fajrTime.innerHTML = full.data.timings.Fajr;
      dhuhrTime.innerHTML = full.data.timings.Dhuhr;
      asrTime.innerHTML = full.data.timings.Asr;
      maghribTime.innerHTML = full.data.timings.Maghrib;
      ishaTime.innerHTML = full.data.timings.Isha;
    })
    .catch((error) => {
      alert(error.message);
    });
}
});