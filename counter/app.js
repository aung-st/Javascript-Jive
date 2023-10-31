// set initial count to 0
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(event){
        
        const styles = event.currentTarget.classList;
        
        if (styles.contains("decrease")){
            count--;
        } else if (styles.contains("increase")){
            count++;
        } else {
            count=0;
        }

        // change counter styling by count value
        if (count < 0){
            value.style.color = "red";
        } else if (count > 0) {
            value.style.color = "green";
        } else {
            value.style.color = "black";
        }
        value.textContent = count;
    });
});