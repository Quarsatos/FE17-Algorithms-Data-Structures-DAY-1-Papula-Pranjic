let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

let answer = Math.floor(Math.random()*100)  +1;
let number_of_guesses = 0;
let guesses = [];

function play(){
    let user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100){
        alert("Please enter a number between 1 and 100!");
    }
    else{
        guesses.push(user_guess);
        number_of_guesses+= 1;
        if(user_guess < answer){
            msg1.textContent =  "Your guess is to low!";
            msg2.textContent =  "Number of guesses:" + number_of_guesses;
            msg3.textContent =  "Guesses:" + guesses;
        }
        else if(user_guess > answer){
            msg1.textContent =  "Your guess is to high!";
            msg2.textContent =  "Number of guesses:" + number_of_guesses;
            msg3.textContent =  "Guesses:" + guesses;
        }
        else if(user_guess == answer){
            msg1.textContent  = "You Win!";
            msg2.textContent  = "The number was: " + answer;
            msg3.textContent  = "You did it in : " + number_of_guesses  +" guesses!";
            document.getElementById("button").disabled = true;
        }

    }

}