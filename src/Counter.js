import React from 'react';
import './counter.css';
import './fireworks.scss';

function Counter() {
  return (
    <div className="Counter">
      <h1 id="text">New Year in:</h1>
      <p id="counter"></p>
      <div class="pyro">
        <div class="before"></div>
        <div class="after"></div>
      </div>
      <p id="creator">Ian Palisak</p>
    </div>
  );
}
var newYear = "Jan 1, 2020 0:0:0";
var countDownDate = new Date(newYear).getTime();
var audio = new Audio('./audio.mp3');

var timer = setInterval(function () {
  
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("counter").innerHTML = days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s";
  document.getElementById("counter-title").innerHTML = days + "d:" + hours + "h:" + minutes + "m:" + seconds + "s | New Year";
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("counter").innerHTML = "Happy New Year";
    document.getElementById("counter-title").innerHTML = "New Year";
    document.getElementById("text").innerHTML = "";
  }
  if (distance < 157000) {
    audio.play();
  }

}, 1000);

export default Counter;