// start phone  clock
setTimeout(function clockDate() {
  var clock = new Date();
  var hours = clock.getHours();
  var minutes = clock.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours > 12) {
    hours -= 12;
    document.getElementById("phone-header-clock").innerHTML =
      hours + ":" + minutes + " PM";
  } else {
    document.getElementById("phone-header-clock").innerHTML =
      hours + ":" + minutes + " AM";
  }

  setTimeout(clockDate, 1000);
}, 1000);
