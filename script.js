let digitalElement = document.querySelector('.digital');
let segElement = document.querySelector('.p_s');
let minElement = document.querySelector('.p_m');
let horElement = document.querySelector('.p_h');

function updateClock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  /* Relogio Analogico */
  let secDeg = ((360 / 60) * second) - 90;
  let minDeg = ((360 / 60) * minute) - 90;
  let horDeg = ((360 / 12) * hour) - 90;

  segElement.style.transform = `rotate(${secDeg}deg)`;
  minElement.style.transform = `rotate(${minDeg}deg)`;
  horElement.style.transform = `rotate(${horDeg}deg)`;

    /* Relogio Digital */
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(hour)}:${fixZero(second)}`;

}

function fixZero(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();