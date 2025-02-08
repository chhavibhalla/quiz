const question = [{
    'que': "which is the best breed of dog",
     'a' : "pug",
     'b' : "husky",
     'c' : "you",
     'd' : "golden retriver",
     'correct':'d'

},
{
     'que' : "which is the best country",
     'a' : "india",
     'b' : "pakistan",
     'c' : "australia",
     'd' : "america",
     'correct ': 'a'
     
}

]
let index = 0;
const quesbox =document.getElementById("quesbox");
const input = document.querySelectorAll("label");

function loadquestion(){
    const data = question[index];
    
    console.log(data);
    quesbox.innerText=data.que;
    input[0].innerHTML=   ` <input type="radio"  name="quiz" value="a"> ${data.a}`;
    input[1].innerHTML=` <input type="radio"  name="quiz" value="a"> ${data.b}`;
    input[2].innerHTML=` <input type="radio"  name="quiz" value="a"> ${data.c}`;
    input[3].innerHTML=` <input type="radio"  name="quiz" value="a"> ${data.d}`;


}

loadquestion();
 const btn = document.getElementById("btn")
 btn.addEventListener("click"),function submitQuiz() {
    
    
    let selectedAnswer;
    

    input.forEach((input) => {
        if (input.checked) {
            selectedAnswer = input.value;
        }
    });

    if (!selectedAnswer) {
        alert("Please select an option!");
        return;
    }

    
    if (selectedAnswer === questions[index].correct) {
        alert("Correct Answer!");
    } else {
        alert("Wrong Answer! The correct answer is " + questions[index].correct.toUpperCase());
    }

    
    index++;
    if (index < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz Completed!");
        index = 0; 
        loadQuestion();
    }
}


loadQuestion();





