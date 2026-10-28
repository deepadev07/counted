
    let number = Math.floor(Math.random() * 10) + 1;
    

    function check() {

    
        let guess = Number(window.prompt("Enter your guess:"));

        

        if (guess == number) {
            document.getElementById("result").innerHTML =
                "Correct! You Win!"
        }
        else if (attempts == 0) {
            document.getElementById("result").innerHTML =
                " Game Over! "
                
            
        }
        else if (guess < number) {
            document.getElementById("result").innerHTML =
                "Too Low! Attempts left: " + attempts
        }
        else {
            document.getElementById("result").innerHTML =
                "Too High! Attempts left: " + attempts
        }
    
        console.log("Number: " + number + ", Guess: " + guess + ", Attempts left: " + attempts);
    
    }
    check();