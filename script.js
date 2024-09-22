console.log("lets wrrrritr some javascript");
let hamburger = document.querySelector(".hamburger")
let cross = document.querySelector(".cross")
let god = document.querySelector("god")
hamburger.addEventListener("click", function () {
    console.log("hamburger cliked")
    document.querySelector("#left").style.left = "0"
})
cross.addEventListener("click", function () {
    console.log("cross cliked")
    document.querySelector("#left").style.left = "-120%"
})
cross.addEventListener("click", function () {
    console.log("god card cliked")
    document.querySelector(".songlist").innerHTML = `
    <li>
        <img class="invert" src="https://ganesh-patankar.github.io/Spotify/img/music.svg" alt="" width="100px">
                            <div class="info">
                                <div class="songname">mahadev mahadev </div>  
                            </div>
                            <div class="playnow">
                            <img class="invert" src="https://ganesh-patankar.github.io/Spotify/img/play.svg" alt="" width="35px">
                            </div>
        </li>`
})
