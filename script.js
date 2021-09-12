'use-strict';

let score = 20;
document.querySelector('#score').textContent = score;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// show message 
let messageShow = function (message) {
    document.querySelector('.message').textContent = message;        
}

// set score 
let setScore = function (scores) {
    document.querySelector('#score').textContent = scores;
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
            guess > secretNumber ? messageShow('📈 Too High!') : messageShow('📉 Too Low!');
            setScore(--score);
        }
        else {
            messageShow('💥 You lost the game');
            setScore(0);
        }
    }

});


// Replay Button
document.querySelector('#again').addEventListener('click', function(){
    document.querySelector('body').classList.remove('background-changer');
    messageShow('Start guessing...');
    setScore(20);
    document.querySelector('.mark-inner').textContent = '?';
    document.querySelector('.mark-inner').style.width = '200px';
    document.querySelector('#input').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;

})