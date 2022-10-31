let scores = 0;
let x = 0;

const guess = [
    {
        color1: "red",
        color2: "blue",
        color3: "orange",
        color4: "green",
        color5: "brown",
        color6: "black",
        correct: "red"
    }, 
    {
        color1: "green",
        color2: "brown",
        color3: "maroon",
        color4: "pink",
        color5: "orange",
        color6: "white",
        correct: "orange"
    },
    {
        color1: "violet",
        color2: "maroon",
        color3: "tan",
        color4: "yellow",
        color5: "teal",
        color6: "silver",
        correct: "silver"
    },
    {
        color1: "gold",
        color2: "gray",
        color3: "rust",
        color4: "pink",
        color5: "orange",
        color6: "white",
        correct: "orange"
    },
    {
        color1: "navyBlue",
        color2: "purple",
        color3: "green",
        color4: "yellow",
        color5: "brown",
        color6: "linen",
        correct: "linen"
    },
    {
        color1: "navyBlue",
        color2: "purple",
        color3: "green",
        color4: "yellow",
        color5: "brown",
        color6: "linen",
        correct: "linen"
    }
];

const score = document.querySelector("label");
const colorName = document.querySelector(".colorName");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");
const color5 = document.getElementById("color5");
const color6 = document.getElementById("color6");
const ques = document.querySelector(".colors");


guessFunc();

function guessFunc(){
    const guessed = guess[x];
    color1.style.background = guessed.color1;
    color2.style.background = guessed.color2;
    color3.style.background = guessed.color3;
    color4.style.background = guessed.color4;
    color5.style.background = guessed.color5;
    color6.style.background = guessed.color6;
    colorName.textContent = guessed.correct;  
    score.textContent = scores;  
    
}


const clr = document.querySelectorAll(".color");
clr.forEach((col) =>{
    col.addEventListener("click", function(){
        const guessed = guess[x];
        let j = col.style.background;
        if(true){
            if(j === guessed.correct){
                scores++;
                console.log(scores);
                guessFunc();
            }        
            x++;
            guessFunc();
            
            if(x === 5){
                ques.innerHTML =    `<h2>You've scored ${scores}/5
                                        <input type="submit" value ="Reload" onclick="location.reload()" id="reload">
                                    </h2>`
                colorName.textContent = "Color";
            }
        }
      
    });
});