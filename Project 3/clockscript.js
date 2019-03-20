let clockEl = document.querySelector('#clock')
let secondHand = document.querySelector('#secondHand')



let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let Seconds = document.querySelector('#seconds')



// run getTime once on load

getTime();

// call getTime every 1 second

setInterval(function() {
  getTime();
}, 1000);




// set up time getting function

function getTime(){

  // get the date

  let d = new Date();

  // get hours, minutes, and seconds

  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());

  // update the clock's text

  let timeText = h + ":" + m + ":" + s
  // clockEl.innerText = h

  hours.innerText = h
  minutes.innerText = m
  Seconds.innerText = s
}

// add a zero to times below 10

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
