const secondHand = document.querySelector(".hand.seconds");
const minutesHand = document.querySelector(".hand.minutes");
const hoursHand = document.querySelector(".hand.hours");
console.log(secondHand);
function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const secondDegree = (second / 60) * 360 + 90;

  const minutes = now.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + 90;

  const hours = now.getHours();
  const hoursDegree = (hours / 12) * 360 + 90;

  secondHand.style.transform = "rotate(" + secondDegree + "deg)";
  minutesHand.style.transform = "rotate(" + minutesDegree + "deg)";
  hoursHand.style.transform = "rotate(" + hoursDegree + "deg)";
}

setInterval(setDate, 1000);
