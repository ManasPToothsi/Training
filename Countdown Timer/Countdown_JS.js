
var x;
var days, hours, minutes, seconds;
function display(){
  document.getElementById("demo").style.display="inline";
  document.getElementById("start1").style.display="inline";
  document.getElementById("stop1").style.display="inline";
  document.getElementById("reset1").style.display="inline";
}

function start(){
  pause();
  var countDownDate = new Date("Jan 24, 2022 17:35:10").getTime();
  x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(seconds<=10){
      document.getElementById("demo").style.color="#ff0000";
    }  
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Time Up!";
    }
  }, 1000);
}

function pause(){
  clearInterval(x);
}

function reset(){
  days=0;
  hours=0;
  minutes=0;
  seconds=0;
  document.getElementById("demo").innerHTML=days + "d " + hours + "h " + minutes + "m " + seconds +"s ";
}
