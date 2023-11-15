setInterval(function () {
  let knoxvilleTimeElement = document.querySelector("#knoxville-time");
  let knoxvilleDateElement = document.querySelector("#knoxville-date");
  let knoxvilleAmPmElement = document.querySelector("#knoxville-am-pm");
  let knoxvilleTime = moment().tz("US/Eastern").format("h:mm:ss");
  let knoxvilleDate = moment().tz("US/Eastern").format("ddd, MMM D, YYYY");
  let knoxvilleAmPm = moment().tz("US/Eastern").format("A");
  let knoxvilleTodayElement = document.querySelector("#knoxville-today");

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

  brisbaneTimeElement.innerHTML = brisbaneTime;
  brisbaneDateElement.innerHTML = brisbaneDate;
  brisbaneAmPmElement.innerHTML = brisbaneAmPm;
}, 1000);
