setInterval(function () {
  let localTimezone = moment.tz.guess();
  let localCity = localTimezone.split("/")[1].replace("_", " ");
  let localZone = localTimezone.split("/")[0].replace("_", " ");
  let localCityElement = document.querySelector("#local-city");
  let localZoneElement = document.querySelector("#local-zone");
  localCityElement.innerHTML = localCity;
  localZoneElement.innerHTML = localZone;

  let localTimeElement = document.querySelector("#local-time");
  let localDayElement = document.querySelector("#local-day");
  let localDateElement = document.querySelector("#local-date");
  let localAmPmElement = document.querySelector("#local-am-pm");
  let localTime = moment().tz("Australia/local").format("h:mm:ss");
  let localDay = moment().tz("Australia/local").format("ddd, ");
  let localDate = moment().tz("Australia/local").format("MMM D, YYYY");
  let localAmPm = moment().tz("Australia/local").format("A");

  localTimeElement.innerHTML = localTime;
  localDayElement.innerHTML = localDay;
  localDateElement.innerHTML = localDate;
  localAmPmElement.innerHTML = localAmPm;
}, 1000);

let localDate = moment().format("MMM D, YYYY");

setInterval(function () {
  let brisbaneTimeElement = document.querySelector("#brisbane-time");
  let brisbaneDayElement = document.querySelector("#brisbane-day");
  let brisbaneDateElement = document.querySelector("#brisbane-date");
  let brisbaneAmPmElement = document.querySelector("#brisbane-am-pm");
  let brisbaneTime = moment().tz("Australia/Brisbane").format("h:mm:ss");
  let brisbaneDay = moment().tz("Australia/Brisbane").format("ddd, ");
  let brisbaneDate = moment().tz("Australia/Brisbane").format("MMM D, YYYY");
  let brisbaneAmPm = moment().tz("Australia/Brisbane").format("A");
  let brisbaneTodayElement = document.querySelector("#brisbane-today");

  if (brisbaneDate === localDate) {
    brisbaneTodayElement.innerHTML = "Today";
  } else {
    if (brisbaneDate < localDate) {
      brisbaneTodayElement.innerHTML = "Yesterday";
    } else {
      if (brisbaneDate > localDate) {
        brisbaneTodayElement.innerHTML = "Tomorrow";
      }
    }
  }

  brisbaneTimeElement.innerHTML = brisbaneTime;
  brisbaneDayElement.innerHTML = brisbaneDay;
  brisbaneDateElement.innerHTML = brisbaneDate;
  brisbaneAmPmElement.innerHTML = brisbaneAmPm;
}, 1000);
