const colors = ["blue", "green", "red"];
const btn = document.querySelector("button");
const heading = document.querySelector("h1");

// function getRandomNumber() {
//    return Math.floor(Math.random()* colors.length);
// };

// btn.addEventListener("click",function(){
//     var random = getRandomNumber();
//     document.body.style.backgroundColor = colors[random];
//     heading.textContent = colors[random];
//     console.log(random);
// });

var letters = ['A','B','C','D','E','F',1,2,3,4,5,6,7,8,9,0];

btn.addEventListener("click",function() {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += letters[randomNumber()];                  
    };
    document.body.style.backgroundColor = hex;
    heading.textContent = hex
});
function randomNumber() {
   return Math.floor(Math.random()* letters.length)
}



