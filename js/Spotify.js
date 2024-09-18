console.log("lets write javascript");
alert("Welcome  This Webplayer Created By Ganesh Patankar")
let currentSong = new Audio();
let songs;
let currFolder;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00"

    }
    const minutes = Math.floor(seconds / 60);
    const remainingSesonds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSesonds).padStart(2, '0');
    return `${formattedMinutes}: ${formattedSeconds}`;

}

async function getSongs(folder) {
    currFolder = folder;
    let a = await fetch(`/${folder}/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
           songs.push(element.href.split(`/${folder}/`)[1])
        }
    }

    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    songUL.innerHTML = ""
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
        <img class="invert" src="/img/music.svg" alt="" width="100px">
                            <div class="info">
                                <div class="songname">${song.replaceAll("%20", " ")} </div>
                                
                                
                            </div>
                            <div class="playnow">
                            <img class="invert" src="/img/play.svg" alt="" width="35px">
                            </div>

         
         </li>`;
    }
















    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })

    })
    return songs;


}


const playMusic = (track, pause = false) => {
    currentSong.src = `/${currFolder}/` + track;
    if (!pause) {
        currentSong.play();
        play.src = "/img/pause.svg"
    }
    //let audio = new Audio("/songs/" + track)

    document.getElementById("songinfo").innerHTML = decodeURI(track)
    document.querySelector("#songtime").innerHTML = "00:00 / 00:00"

}

async function displayalbum() {
    let a = await fetch(`/songs/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardcontainar = document.querySelector(".cardcontainar")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];

        if (e.href.includes("/songs/")) {
            let folder = e.href.split("/").slice(-2)[1]

            let a = await fetch(`/songs/${folder}/info.json`)
            let response = await a.json();
            console.log(response)
            cardcontainar.innerHTML = cardcontainar.innerHTML + `<div data-folder="${folder}" class="card">
                        <div class="play">
                            <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <!-- Circular background -->
                                <circle cx="50" cy="50" r="50" fill="green" />

                                <!-- Play button -->
                                <polygon points="35,30 35,70 75,50" fill="black" />
                            </svg>

                        </div>
                        <img src="/songs/${folder}/cover.jpg" alt="">
                        <h2>${response.title}</h2>
                        <p>${response.description}</p>
                    </div>`

        }
    }
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        console.log(e)
        e.addEventListener("click", async item => {
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
    playMusic(songs[0])
        })
    })

}



async function main() {

    await getSongs("songs/punjabi")
    playMusic(songs[0], true)

    displayalbum()

    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "/img/pause.svg"
        }
        else {
            currentSong.pause()
            play.src = "/img/play.svg"
        }
    })

    currentSong.addEventListener("timeupdate", () => {
        console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector("#songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}/
        ${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })

    //add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100;
    })


    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector("#left").style.left = "0"
    })

    //cant operate this operator
    document.querySelector(".cross").addEventListener("click", () => {
        document.getElementById("left").style.left = "-120%"
    })
    //adding event listner for previous 
    previous.addEventListener("click", () => {
        currentSong.pause()
        console.log("previous")

        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])

        }
        console.log(index)
    })

    next.addEventListener("click", () => {
        currentSong.pause()
        console.log("next")
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])
        }
        console.log(songs)
        console.log(index)
    })
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        currentSong.volume = parseInt(e.target.value) / 100
    })
    document.querySelector(".volumeicon>img").addEventListener("click", e=>{
        if(e.target.src.includes("volume.svg")){
            e.target.src = e.target.src.replace("volume.svg" , "mute.svg")
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else {
            e.target.src = e.target.src.replace("mute.svg" , "volume.svg")
            currentSong.volume = 0.5;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 50;
        }
    }
    )
   

}
main()