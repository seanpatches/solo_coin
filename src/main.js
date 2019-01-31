import catOrDog from './cat-or-dog.js';

const image = document.getElementById('animal-image');
const flipForm = document.getElementById('flip-form');
const status = document.getElementById('status');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');

let losses = 0;
let wins = 0;

flipForm.addEventListener('submit', function(event){
    event.preventDefault();

    const randomNumber = Math.random();
    let animal = catOrDog(randomNumber);
    
    let imageSource = '';

    if(animal === 'cat'){
        imageSource = '../assets/heydaddy.jpg';
    } else {
        imageSource = '../assets/nicdog.jpg';
    }
    image.src = imageSource;
    image.classList.remove('hidden');

    const userChoice = flipForm.elements.animalchoice.value;

    if(userChoice === animal){
        status.textContent = 'You Win!'
        wins++;
        winCount.textContent = wins;
    } else {
        status.textContent = 'You Lose!';
        losses++;
        lossCount.textContent = losses;
    }


    




});