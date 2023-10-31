const colours = ["green","red","purple","orange"];
const btn = document.getElementById("btn");
const colour = document.querySelector(".colour")

btn.addEventListener("click", function(){
    console.log(document.body);
    // get a random number between 0-3
    // with regard to colours array size 
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colours.length);
}