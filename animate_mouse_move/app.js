let c = document.querySelector('.circle');


document.onmousemove = animate;

let colors = ['#ccc', '#6cf', '#eba13a'];


function animate(){
    let c = document.createElement('div');
    c.setAttribute('class', 'circle');
    document.body.appendChild(c);
    
    c.style.left = event.clientX + 'px';
    c.style.top = event.clientY + 'px';

    let col = colors[Math.floor(Math.random * colors.length)];

    c.style.transition = "all 0.5s linear 0s"
    c.style.borderColor = col;

    c.style.left = c.offsetLeft - 20 + 'px';
    c.style.top = c.offsetTop - 20 + 'px';

    c.style.width = '50px';
    c.style.height = '50px';
    c.style.borderRadius = '45px'
    c.style.borderWidth = '3px';
    c.style.opacity = 0;
    
    
    
}