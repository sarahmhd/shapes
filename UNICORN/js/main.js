let hr = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

function getDate() {
  let date = new Date();
  let hour = (date.getHours() % 12) * 30;
  let minutes = date.getMinutes() * 6;
  let seconds = date.getSeconds() * 6;

  hr.style.cssText = `transform: rotate(${hour + minutes / 12}deg); `;
  min.style.cssText = `transform: rotate(${minutes}deg)`;
  sec.style.cssText = `transform: rotate(${seconds}deg)`;
}

getDate();

setInterval(getDate, 1000);
