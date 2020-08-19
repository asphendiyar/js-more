
const sounds = document.querySelectorAll('.sound');
const pads = document.querySelectorAll('#btn');

 


for(let i = 0; i < pads.length; i++){
    pads[i].addEventListener('click', () => {
        sounds[i].play();
    });
};



