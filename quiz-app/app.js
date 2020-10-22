const quiz_data = [
    {
        quiestion: 'How old are you',
        a: '10',
        b: '20',
        c: '18',
        ans: '20'
    },{
        quiestion: 'How old is your mom',
        a: '30',
        b: '40',
        c: '38',
        ans: '38'
    }   
]
const quiestionEl = document.querySelector("h2");
const a_text = document.querySelector('.a');
const b_text = document.querySelector('.b');
const c_text = document.querySelector('.c');
const submitBtn = document.querySelector('button');
const radios = document.querySelectorAll('input');



let curQuiz = 0;
quizLoad();

function quizLoad(){
    const curQuizData = quiz_data[curQuiz];
    quiestionEl.innerHTML = curQuizData.quiestion;
    a_text.innerHTML = curQuizData.a;
    b_text.innerHTML = curQuizData.b;
    c_text.innerHTML = curQuizData.c;
  
}

submitBtn.addEventListener('click', () => {
    curQuiz++;
    if(curQuiz <  quiz_data.length){
        quizLoad();
        radios.checked = 'false';
    }
    else{
         alert("You have finished, Congrats!!!");
         showResults();
    }

});


let right = 0;
function showResults(){
    if( radios.values == curQuizData.ans){
        right++;
    }
    alert("Your result is" + right);
}


