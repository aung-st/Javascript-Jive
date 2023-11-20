const question = document.querySelectorAll(".question");

question.forEach(function (question){
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function(){
        question.classList.toggle("show-text");
    });
});
