'use-strict';

let score = 20;
document.querySelector('#score').textContent = score;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// show message 
let messageShow = function (message) {
    document.querySelector('.message').textContent = message;        
}


// Check button
document.querySelector('.btn-check').addEventListener('click', function(){
    const guess = Number(document.querySelector('#input').value);
    console.log(guess, typeof guess);

    // No Input Number passes.
    if(!guess) {
        messageShow('⛔ No Number');        
    }

    // Winning strategy
    else if(guess === secretNumber) {
        messageShow('🎉 Correct Number');
        document.querySelector('.mark-inner').textContent = secretNumber;
        document.querySelector('body').classList.add('background-changer');
        document.querySelector('.mark-inner').style.width = '15rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('#highscore').textContent = highscore;
        }
        
    }
    // Guess isn't secret key
    else if(guess !== secretNumber) {
        if(score > 1){
            messageShow(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            document.querySelector('#score').textContent = --score;
        }
        else {
            messageShow('💥 You lost the game');
            document.querySelector('#score').textContent = 0;
        }
    }

});


// Replay Button
document.querySelector('#again').addEventListener('click', function(){
    score = 20;
    document.querySelector('body').classList.remove('background-changer');
    messageShow('Start guessing...');
    document.querySelector('#score').textContent = 20;
    document.querySelector('.mark-inner').textContent = '?';
    document.querySelector('.mark-inner').style.width = '200px';
    document.querySelector('#input').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;

})
