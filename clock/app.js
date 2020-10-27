const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');
const watch = document.querySelector('h2');

let min = 0;
let sec = 0;

let displaySec = 0;
let displayMin = 0;

let interval = null;

btnStart.addEventListener('click',startTime);
btnStop.addEventListener('click', stopTime);    
btnReset.addEventListener('click', resetTime);
function timing(){
    sec++;
    if(sec/60 === 1){
        sec = 0;
        min++;
        if(min/60 == 1){
            min = 0;
        }
    }

    if(sec<10){
        displaySec = "0" + sec.toString();
    }
    else {
        displaySec = sec;
    }

    if(min<10){
        displayMin = "0" + min.toString();
    }
    else{
        displayMin = min;
    }

    watch.innerHTML = displayMin +  ':' +  displaySec; 
}


function startTime(){
    interval = window.setInterval(timing, 1000);
}
function stopTime(){
    clearInterval(interval);
}
function resetTime(){
    clearInterval(interval);
    sec = 0;
    min = 0;
    watch.innerHTML = '00:00'; 


}