setInterval(function () {
  let knoxvilleTimeElement = document.querySelector("#knoxville-time");
  let knoxvilleDateElement = document.querySelector("#knoxville-date");
  let knoxvilleAmPmElement = document.querySelector("#knoxville-am-pm");
  let knoxvilleTime = moment().tz("US/Eastern").format("h:mm:ss");
  let knoxvilleDate = moment().tz("US/Eastern").format("ddd, MMM D, YYYY");
  let knoxvilleAmPm = moment().tz("US/Eastern").format("A");
  let knoxvilleTodayElement = document.querySelector("#knoxville-today");
  let userTime = moment().format("ddd, MMM D, YYYY");

  if (knoxvilleDate === userTime) {
    knoxvilleTodayElement.innerHTML = "Today";
  } else {
    if (knoxvilleDate < userTime) {
      knoxvilleTodayElement.innerHTML = "Yesterday";
    } else {
      if (knoxvilleDate > userTime) {
        knoxvilleTodayElement.innerHTML = "Tomorrow";
      }
    }
  }

  knoxvilleTimeElement.innerHTML = knoxvilleTime;
  knoxvilleDateElement.innerHTML = knoxvilleDate;
  knoxvilleAmPmElement.innerHTML = knoxvilleAmPm;
}, 1000);

setInterval(function () {
  let brisbaneTimeElement = document.querySelector("#brisbane-time");
  let brisbaneDateElement = document.querySelector("#brisbane-date");
  let brisbaneAmPmElement = document.querySelector("#brisbane-am-pm");
  let brisbaneTime = moment().tz("Australia/Brisbane").format("h:mm:ss");
  let brisbaneDate = moment()
    .tz("Australia/Brisbane")
    .format("ddd, MMM D, YYYY");
  let brisbaneAmPm = moment().tz("Australia/Brisbane").format("A");
  let brisbaneTodayElement = document.querySelector("#brisbane-today");
  let userTime = moment().format("ddd, MMM D, YYYY");

  if (brisbaneDate === userTime) {
    brisbaneTodayElement.innerHTML = "Today";
  } else {
    if (brisbaneDate < userTime) {
      brisbaneTodayElement.innerHTML = "Yesterday";
    } else {
      if (brisbaneDate > userTime) {
        brisbaneTodayElement.innerHTML = "Tomorrow";
      }
    }
  }

  brisbaneTimeElement.innerHTML = brisbaneTime;
  brisbaneDateElement.innerHTML = brisbaneDate;
  brisbaneAmPmElement.innerHTML = brisbaneAmPm;
}, 1000);

function displayTime(event) {
  let cityTimezone = event.target.value;
  let cityTime = moment().tz(cityTimezone).format("ddd, MMM D, YYYY");
}

citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener("change", displayTime);
