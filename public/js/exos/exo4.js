let input7 = document.querySelectorAll("input")[6]
console.log(input7);
let input8 = document.querySelectorAll("input")[7]
console.log(input8);
let operateur2 = document.querySelectorAll("span")[5]
console.log(operateur2);
let operateur3 = document.querySelectorAll("span")[5].firstElementChild
console.log(operateur3);
let reponse4 = document.getElementById("response4")
console.log(reponse4);
let buttonegal = document.querySelectorAll("button")[7]
let buttonun = document.querySelectorAll("button")[8]
console.log(buttonun);
let buttondeux = document.querySelectorAll("button")[9]
let buttontrois = document.querySelectorAll("button")[10]
let buttonquattre = document.querySelectorAll("button")[11]
let buttoncinq = document.querySelectorAll("button")[12]
let buttonsix = document.querySelectorAll("button")[13]
let buttonsept = document.querySelectorAll("button")[14]
let buttonhuit = document.querySelectorAll("button")[15]
let buttonneuf = document.querySelectorAll("button")[16]
console.log(buttonneuf);
let buttonzero = document.querySelectorAll("button")[17]
let buttonplus = document.querySelectorAll("button")[18]
let buttonmoin = document.querySelectorAll("button")[19]
let buttonfois = document.querySelectorAll("button")[20]
let buttondiviser = document.querySelectorAll("button")[21]
console.log(buttondiviser);


buttonplus.addEventListener("click",()=>{
    operateur3.remove()
    operateur2.innerText = "+"
    })
    buttonmoin.addEventListener("click",()=>{
    operateur3.remove()
    operateur2.innerText = "-"
    })
    buttonfois.addEventListener("click",()=>{
    operateur3.remove()
    operateur2.innerText = "*"
    })
    buttondiviser.addEventListener("click",()=>{
    operateur3.remove()
    operateur2.innerText = "/"
    })

    buttonun.addEventListener("click",()=>{
        if(input7.style == "active"){
            
            input7.value = input7.value + "1"
            
        }else if(input7.style == "focus"){
            input8.value = input8.value + "1"
        }
    })
    console.log(operateur3);

