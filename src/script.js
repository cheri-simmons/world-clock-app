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
  let selectedClockElement = document.querySelector("#selected-clock");

  if (cityTimezone.length === 0) {
    return;
  } else {
    setInterval(function () {
      let selectedCity = cityTimezone.split("/")[1].replace("_", " ");
      let selectedZone = cityTimezone.split("/")[0].replace("_", " ");
      let selectedTime = moment().tz(cityTimezone).format("h:mm:ss");
      let selectedDay = moment().tz(cityTimezone).format("ddd, ");
      let selectedDate = moment().tz(cityTimezone).format("MMM D, YYYY");
      let selectedAmPm = moment().tz(cityTimezone).format("A");
      let selectedToday;

      if (selectedDate === localDate) {
        selectedToday = "Today";
      } else {
        if (selectedDate < localDate) {
          selectedToday = "Yesterday";
        } else {
          if (selectedDate > localDate) {
            selectedToday = "Tomorrow";
          }
        }
      }

      selectedClockElement.innerHTML = `<div class="clock">
            <div class="clock-left">
              <div class="city" id="selected-city">${selectedCity}</div>
              <div class="zone" id="selected-zone">// ${selectedZone}</div>
            </div>
            <div class="clock-right">
              <div>
                <div class="today" id="selected-today">${selectedToday}</div>
                <div>
                  <span class="time" id="selected-time">${selectedTime}</span
                  ><span class="am-pm" id="selected-am-pm">${selectedAmPm}</span>
                </div>
                <div class="date">
                  <span id="selected-day">${selectedDay}</span
                  ><span id="selected-date">${selectedDate}</span>
                </div>
              </div>
            </div>
          </div>`;
    }, 1000);

    let resetLinkElement = document.querySelector("#reset");
    citySelectElement.style.display = "none";
    resetLinkElement.style.display = "block";
  }
}

let citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener("change", displayClock);
