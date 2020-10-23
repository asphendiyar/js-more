const set_task = document.querySelector('input');
const adding = document.querySelector('.add');
const tasks = document.querySelector('.tasks');


adding.addEventListener('click', () => {
    if(set_task.value === ''){
        alert('You did not right anything!!!, PLEASE TRY TO TYPE SOMETHING');

    }else{
        
        var para = document.createElement("P");
        var t = document.createTextNode(set_task.value);
        para.appendChild(t);
        tasks.appendChild(para);
        para.style.padding = '0.5rem';
        let b = document.createElement('button');
        b.innerHTML = 'X';
        para.appendChild(b);
        b.style.margin = '0.5rem';
        b.style.padding = '0.2rem';
        b.addEventListener('click', () => {
            para.style.display = 'none';
            b.style.display = 'none';
        })}
        set_task.value = '';
});

