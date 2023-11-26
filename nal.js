

const box = document.querySelector(".light-box")
const on = document.querySelector(".on")
const off = document.querySelector(".off")

on.addEventListener("click",function(){
    box.style.backgroundColor = "yellow"

    on.style.color ="red"
    off.style.color ="black"

})
off.addEventListener("click",function(){
    box.style.backgroundColor = "transparent"
    
    on.style.color ="black"
    off.style.color ="red"


})