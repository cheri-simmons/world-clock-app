setInterval(function () {
  let localTimezone = moment.tz.guess();
  let localCity = localTimezone.split("/")[1].replace("_", " ");
  let localZone = localTimezone.split("/")[0].replace("_", " ");
  let localCityElement = document.querySelector("#local-city");
  let localZoneElement = document.querySelector("#local-zone");
  localCityElement.innerHTML = localCity;
  localZoneElement.innerHTML = `// ${localZone}`;

  let localTimeElement = document.querySelector("#local-time");
  let localDayElement = document.querySelector("#local-day");
  let localDateElement = document.querySelector("#local-date");
  let localAmPmElement = document.querySelector("#local-am-pm");
  let localTime = moment().format("h:mm:ss");
  let localDay = moment().format("ddd, ");
  let localDate = moment().format("MMM D, YYYY");
  let localAmPm = moment().format("A");

  localTimeElement.innerHTML = localTime;
  localDayElement.innerHTML = localDay;
  localDateElement.innerHTML = localDate;
  localAmPmElement.innerHTML = localAmPm;
}, 1000);

let localDate = moment().format("MMM D, YYYY");

/* new code below */
function displayClock(event) {
  let cityTimezone = event.target.value;

  /* add if value < 1 condition later */
}

let citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener("change", displayClock);
