const board = document.querySelector(".board");

let count = 0;
let some = 0;
for(let i = 1; i <= 64; i++){
    let qv = document.createElement('div');
    qv.style.width = '100px';
    qv.style.height = '100px';
    qv.style.color = 'rgb(235, 107, 2)'
    board.appendChild(qv);
    if(i % 8 == 1) {
        count++;
        some++;
        for(let x = some; x >= 1; x--){
            qv.innerHTML = some;
        }
    }
    if(count % 2 == 0){
        if(i % 2 == 0)  qv.style.backgroundColor = 'white';
        else  qv.style.backgroundColor = 'black';
    }
    else 
        if(i % 2 == 0)  qv.style.backgroundColor = 'black';
        else  qv.style.backgroundColor = 'white';
        
    if(i == 57){
        qv.innerHTML = 'A';
    }
    if(i == 58){
        qv.innerHTML = 'B';
    }
    if(i == 59){
        qv.innerHTML = 'C';
    }
    if(i == 60){
        qv.innerHTML = 'D';
    }
    if(i == 61){
        qv.innerHTML = 'E';
    }
    if(i == 62){
        qv.innerHTML = 'F';
    }
    if(i == 63){
        qv.innerHTML = 'G';
    }
    if(i == 64){
        qv.innerHTML = 'E';
    }
    


}
board.style.display = 'flex';
board.style.flexWrap = 'wrap';

