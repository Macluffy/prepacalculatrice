let input3 = document.querySelectorAll("input")[2]
let select = document.querySelector("select")
let input4 = document.querySelectorAll("input")[3]
let egal1 = document.querySelectorAll("button")[1]
let span1 = document.getElementById("response2")

egal1.addEventListener("click",()=>{
    if(select.value == "+"){
        span1.innerText = parseInt(input3.value) + parseInt(input4.value) 
    }else if(select.value == "-"){
        span1.innerText = parseInt(input3.value) - parseInt(input4.value) 
    }else if(select.value == "*"){
        span1.innerText = parseInt(input3.value) * parseInt(input4.value)
    }else if(select.value == "/"){
        span1.innerText = parseInt(input3.value) / parseInt(input4.value) }
})

