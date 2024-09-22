console.log("lets writr some javascript");
let hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click",function(){
    console.log("hamburger cliked")
    document.querySelector("#left").style.left="0"
})