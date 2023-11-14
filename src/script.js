function getKnoxvilleTime() {
  let knoxvilleTimeElement = document.querySelector("#knoxville-time");
  let knoxvilleDateElement = document.querySelector("#knoxville-");
  let knoxvilleAmPmElement = document.querySelector("#knoxville-am-pm");
  let knoxvilleTime = moment().tz("US/Eastern").format("h:mm:ss");
  let knoxvilleDate = moment().tz("US/Eastern").format("ddd, MMM D, YYYY");
  let knoxvilleAmPm = moment().tz("US/Eastern").format("A");

  knoxvilleTimeElement.innerHTML = knoxvilleTime;
  knoxvilleDateElement.innerHTML = knoxvilleDate;
  knoxvilleAmPmElement.innerHTML = knoxvilleAmPm;
}

getKnoxvilleTime();
setInterval(getKnoxvilleTime, 1000);
