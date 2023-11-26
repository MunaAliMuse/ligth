// const element = document.getElementById("title")

// const text =document.getElementsByTagName("p")[0]

// const className =document.getElementsByClassName("btn")[0]
// const universl = document.querySelector("title")

// console.log(universl)
// console.log(className)
// console.log(element)
// console.log(text)


// const title =document.querySelector("#title")

// title.innerHTML = "waa bedelay "

// title.style.Color="red"
// title.style.backgroundColor="blue"

const title =document.querySelector("#title")
const btn = document.querySelector(".btn")
const button = document.querySelector(".button")
const body = document.querySelector(".body")
btn.addEventListener("click",function() {
    title.style.color ="red"
    title.style.backgroundColor="brown"
    btn.style.backgroundColor="blue"
    body.style.backgroundColor("yellow")


})


button.addEventListener("click", function() {
    title.style.color ="blue"
    button.style.backgroundColor="yellow"
    body.style.backgroundColor("red")

})



btn.innerHTML ="save"
btn.style.color="brown"
btn.style.fontSize="20px"


button.innerHTML ="save"
button.style.color="brown"
button.style.fontSize="20px"
