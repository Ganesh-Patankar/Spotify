console.log("lets writr some javascript");
let hamburger = document.querySelector(".hamburger")
let cross = document.querySelector(".cross")
hamburger.addEventListener("click",function(){
    console.log("hamburger cliked")
    document.querySelector("#left").style.left="0"
})
cross.addEventListener("click",function(){
    console.log("cross cliked")
    document.querySelector("#left").style.left="-120%"
})