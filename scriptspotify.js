console.log("lets writr some javascript");
let hamburger = document.querySelector(".hamburger")
let cross = document.querySelector(".cross")


//event lisstener fot hamburger
hamburger.addEventListener("click", function () {
    console.log("hamburger cliked")
    document.querySelector("#left").style.left = "0"
})


//event lisstener fot cross
cross.addEventListener("click", function () {
    console.log("cross cliked")
    document.querySelector("#left").style.left = "-120%"
})



//element for godcard and godsong
let god = document.querySelector(".god")


//event lisstener fot godcard
god.addEventListener("click", function () {
    console.log("god card cliked")
    document.querySelector(".godsong").style.display = "block"
    document.querySelector("#left").style.left = "0"


    let song1 = document.querySelector(".song1>li")
    let song2 = document.querySelector(".song2>li")
    let song3 = document.querySelector(".song3>li")
    let song4 = document.querySelector(".song4>li")





    //songs in godsong
    let sang1 = document.querySelector("#song1")
    let sang2 = document.querySelector("#song2")
    let sang3 = document.querySelector("#song3")
    let sang4 = document.querySelector("#song4")

    let play = document.querySelector("#play")
    let pause = document.querySelector("#pause")




    //event listner for play song1 on click
    song1.addEventListener("click", function () {
        console.log("song1played cliked")
        sang1.currentTime = 0;
        sang2.pause();
        sang3.pause();
        sang4.pause();
        sang1.play();
        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            sang1.pause();
            sang2.pause();
            sang3.pause();
            sang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            sang2.pause();
            sang3.pause();
            sang4.pause();
            sang1.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        sang1.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (sang1.currentTime / sang1.duration) * 100;

            let minutes = Math.floor(sang1.currentTime / 60);
            let seconds = Math.floor(sang1.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/03:19";
            name.textContent = "Har har Gange"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * sang1.duration;
                sang1.currentTime = time;
            })
        })





    })
    //event listner for play song2 on click

    song2.addEventListener("click", function () {
        console.log("song2played cliked")
        sang2.currentTime = 0;
        sang1.pause();
        sang3.pause();
        sang4.pause();
        sang2.play();
        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            sang1.pause();
            sang2.pause();
            sang3.pause();
            sang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            sang1.pause();
            sang3.pause();
            sang4.pause();
            sang2.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        sang2.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (sang2.currentTime / sang2.duration) * 100;

            let minutes = Math.floor(sang2.currentTime / 60);
            let seconds = Math.floor(sang2.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/04:47";
            name.textContent = "Radha rani lage"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * sang2.duration;
                sang2.currentTime = time;
            })
        })



    })

    //event listner for play song3 on click


    song3.addEventListener("click", function () {
        console.log("song3played cliked")
        sang3.currentTime = 0;

        sang2.pause();
        sang1.pause();
        sang4.pause();
        sang3.play();
        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            sang1.pause();
            sang2.pause();
            sang3.pause();
            sang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            sang2.pause();
            sang1.pause();
            sang4.pause();
            sang3.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        sang3.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (sang3.currentTime / sang3.duration) * 100;

            let minutes = Math.floor(sang3.currentTime / 60);
            let seconds = Math.floor(sang3.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/06:09";
            name.textContent = "Mere Mahadev Rap song"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * sang3.duration;
                sang3.currentTime = time;
            })
        })

    })

    //event listner for play song4 on click
    song4.addEventListener("click", function () {
        console.log("song4played cliked")
        sang4.currentTime = 0;
        sang2.pause();
        sang1.pause();
        sang3.pause();
        sang4.play();
        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            sang1.pause();
            sang2.pause();
            sang3.pause();
            sang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            sang2.pause();
            sang1.pause();
            sang3.pause();
            sang4.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        sang4.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (sang4.currentTime / sang4.duration) * 100;

            let minutes = Math.floor(sang4.currentTime / 60);
            let seconds = Math.floor(sang4.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/06:00";
            name.textContent = "Dagdushet ganpati Song"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * sang4.duration;
                sang4.currentTime = time;
            })
        })

    })



})

/*  song2.addEventListener("click", function () {
      console.log("song2played cliked")

  })
  song3.addEventListener("click", function () {
      console.log("song3played cliked")

  })
  song4.addEventListener("click", function () {
      console.log("song4played cliked")

  })
      (namevalue == "suraj"||"Suraj"|| "SURAJ"|| "Suraj Chavan"|| "Suraj chavan"){
        document.querySelector("#msg").innerHTML = `&nbsp;&nbsp;&nbsp;"Hii <br> &nbsp;&nbsp;<i>SQ RQ ZQ</i>"` 
    let songsuraj = document.querySelector("#suraj")
        songsuraj.play();*/