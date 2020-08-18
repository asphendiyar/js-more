const tim = document.querySelector('#clock');


function time(){
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    if(s < 10){
        s = "0" + s;
    }
    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    

    let t = h + ":" +  m + ":" + s;
    
    tim.innerHTML = t;
    tim.textContent = t;
    setInterval(time, 1000);



}

time();