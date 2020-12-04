const correctAnswers = ['B', 'B', 'A', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.results');

form.addEventListener('submit', e => {

    e.preventDefault();


    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 20;
        }
    });
    scrollTo(0, 0);
    const show = document.querySelector('.d-none');
    show.style.display = 'block';

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('.score-percentage').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }

    }, 10);
});













































/*
const correctOptions = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.results');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAnswers.forEach((answer, index) => {
        if (answer === correctOptions[index]) {
            score += 25;
        }
    });
    scrollTo(0, 0);

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('.score-percentage').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});

*/