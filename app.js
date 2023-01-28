const questions = document.querySelectorAll(".question");
let sibling = null;

questions.forEach(question => {
    question.addEventListener("click", () => {
        if(!question.classList.contains("open")){
            questions.forEach(q => {
                q.classList.remove("open");
                sibling = q.nextElementSibling;
                sibling.classList.remove("expand");
            });
        }
        question.classList.toggle("open");
        sibling = question.nextElementSibling;
        sibling.classList.toggle("expand");
    });
});

