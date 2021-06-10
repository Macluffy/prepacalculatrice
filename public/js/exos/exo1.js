let input1 = document.querySelector("input")
console.log(input1);
let input2 = document.querySelectorAll("input")[1]
console.log(input2);
let egal = document.querySelector("button")
let span = document.getElementById("response1")
console.log(span);

egal.addEventListener("click",()=>{
span.innerText = parseInt(input1.value) + parseInt(input2.value)
console.log(input1);
})