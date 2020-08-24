const c = document.querySelector('.celcius>input');
const f = document.querySelector('.fahrenheit>input');
const k = document.querySelector('.kelvin>input');

console.log(c);
c.addEventListener('input',c_fk);
f.addEventListener('input',f_ck);
k.addEventListener('input',k_cf);

function c_fk(){
    const ctemp = c.value;
    const ftemp = ctemp * 1.8 + 32;
    const ktemp = ctemp + 273.15;
    k.value = ktemp;
    f.value = ftemp;
}

function f_ck(){
    const ftemp = f.value;
    const ctemp = ftemp/5 * 9 + 32;
    const ktemp = (ftemp - 32) * 5/9 + 273.15;
    c.value = ctemp;
    k.value = ktemp;
}

function k_cf(){
    const ktemp = k.value;
    const ctemp = ktemp - 273.15;
    const ftemp = ktemp * 9/5 - 459.67;
    c.value = ctemp;
    f.value = ftemp;
}
