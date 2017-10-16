const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

/*methods to get the current time*/

 var date = new Date();
  console.log(date);
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

/*code below positions the hands re: degrees on a circle, from the values in time variables above
ie. how many of 360 degrees are covered by seconds, minutes and hours*/

  let hrPosition = (hr*360/12)+(min*(360/60)/12);
  let minPosition = (min*360/60) + (sec*(360/60)/60);
  let secPosition = sec*360/60;

function runTheClock() {
 
 /*using math/circle degrees below to set where the hands should be on the clock */
  
  hrPosition = hrPosition+(3/360);
  minPosition = minPosition+(6/60);
  secPosition = secPosition+6;
  

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

/*this method ensures the run clocks continually, rather than only when page refreshed. 
The number is 1000 milliseconds or one second.   Learning is fun*/

var interval = setInterval(runTheClock, 1000);