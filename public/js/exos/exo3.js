let input5 = document.querySelectorAll("input")[4]
let input6 = document.querySelectorAll("input")[5]
let egal3 = document.querySelectorAll("button")[2]
let button1 = document.querySelectorAll("button")[3]

let button2 = document.querySelectorAll("button")[4]
console.log(button2);
let button3 = document.querySelectorAll("button")[5]
let button4 = document.querySelectorAll("button")[6]
let operateur = document.querySelectorAll("span")[3]
let operateur1 = document.querySelectorAll("span")[3].firstElementChild
let reponse3 = document.getElementById("response3")
console.log(operateur);

button1.addEventListener("click",()=>{
operateur1.remove()
operateur.innerText = "+"
})
button2.addEventListener("click",()=>{
operateur1.remove()
operateur.innerText = "-"
})
button3.addEventListener("click",()=>{
operateur1.remove()
operateur.innerText = "*"
})
button4.addEventListener("click",()=>{
operateur1.remove()
operateur.innerText = "/"
})
egal3.addEventListener("click",()=>{
    if(operateur.innerText == "+" ){
        reponse3.innerText = parseInt(input5.value) + parseInt(input6.value) 
    }else if(operateur.innerText == "-"){
        reponse3.innerText = parseInt(input5.value) - parseInt(input6.value) 
    }else if(operateur.innerText == "*"){
        reponse3.innerText = parseInt(input5.value) * parseInt(input6.value) 
    }else if(operateur.innerText == "/"){
        reponse3.innerText = parseInt(input5.value) / parseInt(input6.value) 
    }else{
        reponse3.innerText = parseInt(input5.value) + parseInt(input6.value) 
    }
})
