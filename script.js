"use strict";

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach(function (sound) {
  // sound = placeholder for individual element in array
  const btn = document.createElement("button");
  btn.classList.add("btn"); //for styling
  document.getElementById("buttons").appendChild(btn);

  btn.innerText = sound; // array-elements-name comes in each individual button

  btn.addEventListener("click", function () {
    stopSounds();
    document.getElementById(sound).play();
  });
});

function stopSounds() {
  sounds.forEach(function (sound) {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
