const btnOper = document.querySelectorAll('.operations');
const btnNum = document.querySelectorAll('.numbers');
const btnDisplay = document.querySelector('.display');



btnNum.forEach((ele) => {
    ele.addEventListener('click', () => {
        
        if(ele.innerHTML == '1') btnDisplay.innerHTML = btnDisplay.innerHTML.toString() + '1';
        if(ele.innerHTML == '2') btnDisplay.innerHTML = btnDisplay.innerHTML.toString() + '2';
        if(ele.innerHTML == '3') btnDisplay.innerHTML = btnDisplay.innerHTML.toString() + '3';
        if(ele.innerHTML == '4') btnDisplay.innerHTML = btnDisplay.innerHTML.toString() + '4';
        if(ele.innerHTML == '5') btnDisplay.innerHTML = btnDisplay.innerHTML.toString() + '5';
        if(ele.innerHTML == '6') btnDisplay.innerHTML = btnDisplay.innerHTML.toString() + '6';
        if(ele.innerHTML == '7') btnDisplay.innerHTML = btnDisplay.innerHTML.toString() + '7';
        if(ele.innerHTML == '8') btnDisplay.innerHTML = btnDisplay.innerHTML.toString() + '8';
        if(ele.innerHTML == '9') btnDisplay.innerHTML = btnDisplay.innerHTML.toString() + '9';
        if(ele.innerHTML == '0') btnDisplay.innerHTML = btnDisplay.innerHTML.toString() + '0';

    });
  });

  btnOper.forEach((elem) => {
    elem.addEventListener('click', () => {
        
        if(elem.innerHTML == 'AC') btnDisplay.innerHTML = ' ';
    
        if(elem.innerHTML == 'C') btnDisplay.innerHTML = btnDisplay.innerHTML.slice(0,-1);
    
        if(elem.innerHTML == '*') {
            btnDisplay.innerHTML = btnDisplay.innerHTML.toString() + "*";
        }
        if(elem.innerHTML == '/') {
            btnDisplay.innerHTML = btnDisplay.innerHTML.toString() + "/";
        }
        if(elem.innerHTML == '+') {
            btnDisplay.innerHTML = btnDisplay.innerHTML.toString() + "+";
        }
        if(elem.innerHTML == '-') {
            btnDisplay.innerHTML = btnDisplay.innerHTML.toString() + "-";
        }
        if(elem.innerHTML == '.') {
            btnDisplay.innerHTML = btnDisplay.innerHTML.toString() + ".";
        }

        if(elem.innerHTML == '=') {
            btnDisplay.innerHTML = eval(btnDisplay.innerHTML);
        }

    });
  });
