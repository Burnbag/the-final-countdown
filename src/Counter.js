import React from 'react';
import './counter.css';
import './fireworks.scss';

function Counter() {
  return (
    <div className="Counter">
      <h1 id="text">New Year <b>2020</b> in:</h1>
      <p id="counter"></p>
      <div className="pyro">
        <div className="before"></div>
        <div className="after"></div>
      </div>
      <p id="creator">Burnbag</p>
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
    document.getElementById("text").style = "display: none;";
  }
  if (distance < 157000) {
    audio.play();
  }

}, 1);

export default Counter;