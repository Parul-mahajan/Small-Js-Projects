// const secondHand = document.querySelector(".second");
// const minsHand = document.querySelector(".min");
// const hourHand = document.querySelector(".hour");

function setTime() {
  //   const day = new Date();
  //   const seconds = now.getSeconds();
  //   const secondsDegrees = (seconds / 60) * 360 + 90;
  //   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  //   const mins = now.getMinutes();
  //   const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  //   minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  //   const hour = now.getHours();
  //   const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  //   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  const day = new Date();
  let h = day.getHours();
  let m = day.getMinutes();
  // const secondsDegrees = (s / 60) * 360 + 90;
  // secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  let s = day.getSeconds();
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  if (h < 10) {
    h = "0" + h;
  }
  let am;
  if (h < 12) {
    am = "AM";
  } else {
    am = "PM";
  }
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + " " + am;
}
setInterval(setTime, 1000);

setTime();
