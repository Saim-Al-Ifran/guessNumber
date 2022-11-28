let computerGuess;
let userGuess = [];
let inputBox = document.getElementById("inputBox"); 
let maxGuess;
let audio = new Audio("Music/Document.wav");
let sui = new Audio("Music/sui.mp3");

const init = () =>{
      computerGuess = Math.floor(Math.random()* 100);
      document.getElementById("newGameButton").style.display = "none";
      document.getElementById("gameArea").style.display = "none";

      console.log(computerGuess)
}


const startNewGame = ()=>{
    audio.play();
      window.location.reload()
}

const  completeGame  = () =>{
    document.getElementById("newGameButton").style.display = "block";
    inputBox.setAttribute("disabled",true);
}


const compareGuess = () =>{
    audio.play();
       let userInput = Number(document.getElementById("inputBox").value);
       userGuess = [...userGuess, userInput];
       document.getElementById("guesses").innerHTML = userGuess;
       inputBox.value = "";

       document.getElementById("attempts").innerHTML = userGuess.length;

    if(userGuess.length < maxGuess){
        if(userInput > computerGuess){
            document.getElementById("textOutput").innerHTML = "Your guess is High😮";
        }else if(userInput < computerGuess){
                document.getElementById("textOutput").innerHTML = "Your guess is low😕";
        }else{
                document.getElementById("textOutput").innerHTML = "Hurry!! You guess correctly😍";
                completeGame();
                sui.play();
        }
    }else{
        if(userInput > computerGuess){
            document.getElementById("textOutput").innerHTML = `You Loose!! the correct answer is ${computerGuess}`;
        }else if(userInput < computerGuess){
                document.getElementById("textOutput").innerHTML = `You Loose!! the correct answer is ${computerGuess}`;
        }else{
                document.getElementById("textOutput").innerHTML = "Hurry!! You guess correctly😍";
                completeGame();
        }
        document.getElementById("newGameButton").style.display = "block";
        inputBox.setAttribute("disabled",true);
        

    }

      
       
         
}

const startGame = () =>{
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("welcomeScreen").style.display = "none";
}

const easyMode = () =>{
        audio.play();
        maxGuess = 10;
        startGame();         
}


const hardMode = () =>{
         audio.play();
         maxGuess = 5;
        startGame();
}















 