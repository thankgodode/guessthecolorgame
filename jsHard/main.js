let scores = 0;
let x = 0;

const guess = [
    {
        color1: "rgb(255, 255, 17)",
        color2: "rgb(25, 55, 10)",
        color3: "rgb(10, 12, 110)",
        color4: "rgb(55, 255, 7)",
        color5: "rgb(18, 18, 18)",
        color6: "rgb(19, 255, 93)",
        correct: "rgb(55, 255, 7)"
    }, 
    {
        color1: "rgb(2, 2, 17)",
        color2: "rgb(300, 100, 10)",
        color3: "rgb(100, 502, 11)",
        color4: "rgb(130, 130, 130)",
        color5: "rgb(199, 299, 10)",
        color6: "rgb(19, 255, 93)",
        correct: "rgb(19, 255, 93)"
    },
    {
        color1: "rgb(100, 150, 100)",
        color2: "rgb(0, 100, 130)",
        color3: "rgb(120, 11, 201)",
        color4: "rgb(170, 30, 130)",
        color5: "rgb(99, 29, 0)",
        color6: "rgb(199, 55, 93)",
        correct: "rgb(120, 11, 201)"   
    },
    {
        color1: "rgb(10, 50, 10)",
        color2: "rgb(100, 100, 100)",
        color3: "rgb(120, 150, 201)",
        color4: "rgb(170, 30, 255)",
        color5: "rgb(99, 255, 0)",
        color6: "rgb(199, 55, 245)",
        correct: "rgb(10, 50, 10)"   
    },
    {
        color1: "rgb(10, 250, 100)",
        color2: "rgb(200, 200, 200)",
        color3: "rgb(10, 150, 255)",
        color4: "rgb(70, 130, 200)",
        color5: "rgb(255, 255, 0)",
        color6: "rgb(0, 55, 5)",
        correct: "rgb(0, 55, 5)"   
    },
    {
        color1: "silver",
        color2: "gold",
        color3: "teal",
        color4: "linen",
        color5: "maroon",
        color6: "purple",
        correct: "teal"   
    },
    {
        color1: "rgb(10, 250, 100)",
        color2: "rgb(200, 200, 200)",
        color3: "rgb(10, 150, 255)",
        color4: "rgb(70, 130, 200)",
        color5: "rgb(255, 255, 0)",
        color6: "rgb(0, 55, 5)",
        correct: "rgb(0, 55, 5)"   
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
    col.addEventListener("click", (e) =>{
        const guessed = guess[x];
        let j = e.currentTarget.style.background;
        console.log(j)
            if(j === guessed.correct){
                console.log("It works!");
                guessFunc();
                scores++;
                console.log(scores);
                
            }        
            x++;
            guessFunc();

            if(x === 6){
                ques.innerHTML =    `<h2 style="color: white">You've scored ${scores}/6
                                        <input style="cursor:pointer"type="submit" value ="Reload" onclick="location.reload()" id="reload">
                                    </h2>`
                colorName.textContent = "Color";
                h2.style.color = "white";

            }   
    });
});