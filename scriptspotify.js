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

//songs in godsong
let sang1 = document.querySelector("#song1")
let sang2 = document.querySelector("#song2")
let sang3 = document.querySelector("#song3")
let sang4 = document.querySelector("#song4")

//songs in drivesong
let drivesang1 = document.querySelector("#drivesong1")
let drivesang2 = document.querySelector("#drivesong2")
let drivesang3 = document.querySelector("#drivesong3")
let drivesang4 = document.querySelector("#drivesong4")


//songs in haripathsong
let haripathsang1 = document.querySelector("#haripathsong1")
let haripathsang2 = document.querySelector("#haripathsong2")
let haripathsang3 = document.querySelector("#haripathsong3")
let haripathsang4 = document.querySelector("#haripathsong4")

//songs in hindisong
let hindisang1 = document.querySelector("#hindisong1")
let hindisang2 = document.querySelector("#hindisong2")
let hindisang3 = document.querySelector("#hindisong3")
let hindisang4 = document.querySelector("#hindisong4")


//songs in lofisong
let lofisang1 = document.querySelector("#lofisong1")
let lofisang2 = document.querySelector("#lofisong2")
let lofisang3 = document.querySelector("#lofisong3")
let lofisang4 = document.querySelector("#lofisong4")


//songs in marathisong
let marathisang1 = document.querySelector("#marathisong1")
let marathisang2 = document.querySelector("#marathisong2")
let marathisang3 = document.querySelector("#marathisong3")
let marathisang4 = document.querySelector("#marathisong4")



//songs in partysong
let partysang1 = document.querySelector("#partysong1")
let partysang2 = document.querySelector("#partysong2")
let partysang3 = document.querySelector("#partysong3")
let partysang4 = document.querySelector("#partysong4")



//songs in punjabisong
let punjabisang1 = document.querySelector("#punjabisong1")
let punjabisang2 = document.querySelector("#punjabisong2")
let punjabisang3 = document.querySelector("#punjabisong3")
let punjabisang4 = document.querySelector("#punjabisong4")



//songs in rapsong
let rapsang2 = document.querySelector("#rapsong2")
let rapsang3 = document.querySelector("#rapsong3")
let rapsang4 = document.querySelector("#rapsong4")
let rapsang1 = document.querySelector("#rapsong1")



//songs in sleepsong
let sleepsang2 = document.querySelector("#sleepsong2")
let sleepsang3 = document.querySelector("#sleepsong3")
let sleepsang4 = document.querySelector("#sleepsong4")
let sleepsang1 = document.querySelector("#sleepsong1")




//element for cards
let god = document.querySelector(".god")
let drive = document.querySelector(".drive")
let haripath = document.querySelector(".haripath")
let hindi = document.querySelector(".hindi")
let lofi = document.querySelector(".lofi")
let marathi = document.querySelector(".marathi")
let party = document.querySelector(".party")
let punjabi = document.querySelector(".punjabi")
let rap = document.querySelector(".rap")
let sleep = document.querySelector(".sleep")




//event lisstener fot godcard
god.addEventListener("click", function () {
    console.log("god card cliked")
    document.querySelector(".godsong").style.display = "block"
    document.querySelector(".drivesong").style.display = "none"
    document.querySelector(".haripathsong").style.display = "none"
    document.querySelector(".hindisong").style.display = "none"
    document.querySelector(".lofisong").style.display = "none"
    document.querySelector(".marathisong").style.display = "none"
    document.querySelector(".partysong").style.display = "none"
    document.querySelector(".punjabisong").style.display = "none"
    document.querySelector(".rapsong").style.display = "none"
    document.querySelector(".sleepsong").style.display = "none"


    document.querySelector("#left").style.left = "0"


    let song1 = document.querySelector(".song1>li")
    let song2 = document.querySelector(".song2>li")
    let song3 = document.querySelector(".song3>li")
    let song4 = document.querySelector(".song4>li")






    let play = document.querySelector("#play")
    let pause = document.querySelector("#pause")




    //event listner for play song1 on click
    song1.addEventListener("click", function () {
        console.log("song1played cliked")
        sang1.currentTime = 0;
       
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
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
            name.textContent = "Har Har Gange  Full Song  Batti Gul Meter Chalu"
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
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
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
            name.textContent = "RADHA RANI LAGE  SIMPAL KHAREL NEW SONG"
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
        sang1.pause();
        sang2.pause();
       
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
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
        sang1.pause();
        sang2.pause();
        sang3.pause();
       
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
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






//drive songs

drive.addEventListener("click", function () {
    console.log("drive card cliked")
    document.querySelector(".godsong").style.display = "none"
    document.querySelector(".drivesong").style.display = "block"
    document.querySelector(".haripathsong").style.display = "none"
    document.querySelector(".hindisong").style.display = "none"
    document.querySelector(".lofisong").style.display = "none"
    document.querySelector(".marathisong").style.display = "none"
    document.querySelector(".partysong").style.display = "none"
    document.querySelector(".punjabisong").style.display = "none"
    document.querySelector(".rapsong").style.display = "none"
    document.querySelector(".sleepsong").style.display = "none"
    document.querySelector("#left").style.left = "0"


    let drivesong1 = document.querySelector(".drivesong1>li")
    let drivesong2 = document.querySelector(".drivesong2>li")
    let drivesong3 = document.querySelector(".drivesong3>li")
    let drivesong4 = document.querySelector(".drivesong4>li")


    let play = document.querySelector("#play")
    let pause = document.querySelector("#pause")


    //event listner for play drivesong1 on click
    drivesong1.addEventListener("click", function () {
        console.log("drivesong1played cliked")
        drivesang1.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
       
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        drivesang1.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            drivesang1.pause();
            drivesang2.pause();
            drivesang3.pause();
            drivesang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            drivesang2.pause();
            drivesang3.pause();
            drivesang4.pause();
            drivesang1.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        drivesang1.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (drivesang1.currentTime / drivesang1.duration) * 100;

            let minutes = Math.floor(drivesang1.currentTime / 60);
            let seconds = Math.floor(drivesang1.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/03:19";
            name.textContent = "EMIWAY BANTAI  - DEPENDENT KAUVE  OFFICIAL AUDIO"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * drivesang1.duration;
                drivesang1.currentTime = time;
            })
        })
    })
    //event listner for play drivesong2 on click

    drivesong2.addEventListener("click", function () {
        console.log("drivesong2played cliked")
        drivesang2.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
       
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        drivesang2.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            drivesang1.pause();
            drivesang2.pause();
            drivesang3.pause();
            drivesang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            drivesang1.pause();
            drivesang3.pause();
            drivesang4.pause();
            drivesang2.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        drivesang2.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (drivesang2.currentTime / drivesang2.duration) * 100;

            let minutes = Math.floor(drivesang2.currentTime / 60);
            let seconds = Math.floor(drivesang2.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/04:47";
            name.textContent = "Naina  Crew  Diljit Dosanjh, Ft. Badshah"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * drivesang2.duration;
                drivesang2.currentTime = time;
            })
        })



    })

    //event listner for play drivesong3 on click


    drivesong3.addEventListener("click", function () {
        console.log("drivesong3played cliked")
        drivesang3.currentTime = 0;

        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
       
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        drivesang3.play();
        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {

            drivesang1.pause();
            drivesang2.pause();
            drivesang3.pause();
            drivesang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            drivesang2.pause();
            drivesang1.pause();
            drivesang4.pause();
            drivesang3.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        drivesang3.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (drivesang3.currentTime / drivesang3.duration) * 100;

            let minutes = Math.floor(drivesang3.currentTime / 60);
            let seconds = Math.floor(drivesang3.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/06:09";
            name.textContent = "Udd Jaa Kaale Kaava  Gadar 2"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * drivesang3.duration;
                drivesang3.currentTime = time;
            })
        })

    })

    //event listner for play drivesong4 on click
    drivesong4.addEventListener("click", function () {
        console.log("drivesong4played cliked")
        drivesang4.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        drivesang4.play();
        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            drivesang1.pause();
            drivesang2.pause();
            drivesang3.pause();
            drivesang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            drivesang2.pause();
            drivesang1.pause();
            drivesang3.pause();
            drivesang4.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        drivesang4.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (drivesang4.currentTime / drivesang4.duration) * 100;

            let minutes = Math.floor(drivesang4.currentTime / 60);
            let seconds = Math.floor(drivesang4.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/06:00";
            name.textContent = "Dagdushet ganpati Song"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * drivesang4.duration;
                drivesang4.currentTime = time;
            })
        })

    })


})


// event listner for haripath
haripath.addEventListener("click", function () {
    console.log("haripath card cliked")
    document.querySelector(".godsong").style.display = "none"
    document.querySelector(".drivesong").style.display = "none"
    document.querySelector(".haripathsong").style.display = "block"
    document.querySelector(".hindisong").style.display = "none"
    document.querySelector(".lofisong").style.display = "none"
    document.querySelector(".marathisong").style.display = "none"
    document.querySelector(".partysong").style.display = "none"
    document.querySelector(".punjabisong").style.display = "none"
    document.querySelector(".rapsong").style.display = "none"
    document.querySelector(".sleepsong").style.display = "none"
    document.querySelector("#left").style.left = "0"


    let haripathsong1 = document.querySelector(".haripathsong1>li")
    let haripathsong2 = document.querySelector(".haripathsong2>li")
    let haripathsong3 = document.querySelector(".haripathsong3>li")
    let haripathsong4 = document.querySelector(".haripathsong4>li")






    let play = document.querySelector("#play")
    let pause = document.querySelector("#pause")

    //event listner for play song1 on click
    haripathsong1.addEventListener("click", function () {
        console.log("haripathsong1played cliked")
        haripathsang1.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
      
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        haripathsang1.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            haripathsang1.pause();
            haripathsang2.pause();
            haripathsang3.pause();
            haripathsang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            haripathsang2.pause();
            haripathsang3.pause();
            haripathsang4.pause();
            haripathsang1.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        haripathsang1.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (haripathsang1.currentTime / haripathsang1.duration) * 100;

            let minutes = Math.floor(haripathsang1.currentTime / 60);
            let seconds = Math.floor(haripathsang1.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/03:19";
            name.textContent = "संत ज्ञानेश्वर माउली हरिपाठ"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * haripathsang1.duration;
                haripathsang1.currentTime = time;
            })
        })





    })

    //event listner for play haripathsong2 on click

    haripathsong2.addEventListener("click", function () {
        console.log("haripathsong2played cliked")
        haripathsang2.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
       
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        haripathsang2.play();
        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            haripathsang1.pause();
            haripathsang2.pause();
            haripathsang3.pause();
            haripathsang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            haripathsang1.pause();
            haripathsang3.pause();
            haripathsang4.pause();
            haripathsang2.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        haripathsang2.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (haripathsang2.currentTime / haripathsang2.duration) * 100;

            let minutes = Math.floor(haripathsang2.currentTime / 60);
            let seconds = Math.floor(haripathsang2.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/04:47";
            name.textContent = "Vitthal Namachi Shala Bharali Bhajan"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * haripathsang2.duration;
                haripathsang2.currentTime = time;
            })
        })



    })

    //event listner for play haripathsong3 on click


    haripathsong3.addEventListener("click", function () {
        console.log("haripathsong3played cliked")
        haripathsang3.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        haripathsang3.play();


        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            haripathsang1.pause();
            haripathsang2.pause();
            haripathsang3.pause();
            haripathsang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            haripathsang2.pause();
            haripathsang1.pause();
            haripathsang4.pause();
            haripathsang3.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        haripathsang3.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (haripathsang3.currentTime / haripathsang3.duration) * 100;

            let minutes = Math.floor(haripathsang3.currentTime / 60);
            let seconds = Math.floor(haripathsang3.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/06:09";
            name.textContent = "माउली माउली - Mauli Mauli | Lai Bhaari | "
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * haripathsang3.duration;
                haripathsang3.currentTime = time;
            })
        })

    })

    //event listner for play haripathsong4 on click
    haripathsong4.addEventListener("click", function () {
        console.log("haripathsong4played cliked")
        haripathsang4.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        haripathsang4.play();


        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            haripathsang1.pause();
            haripathsang2.pause();
            haripathsang3.pause();
            haripathsang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            haripathsang2.pause();
            haripathsang1.pause();
            haripathsang3.pause();
            haripathsang4.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        haripathsang4.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (haripathsang4.currentTime / haripathsang4.duration) * 100;

            let minutes = Math.floor(haripathsang4.currentTime / 60);
            let seconds = Math.floor(haripathsang4.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/06:00";
            name.textContent = "Deva Tujhya Navach Yed Lagal |"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * haripathsang4.duration;
                haripathsang4.currentTime = time;
            })
        })

    })


})





//hindi songs



hindi.addEventListener("click", function () {
    console.log("hindi card cliked")
    document.querySelector(".godsong").style.display = "none"
    document.querySelector(".drivesong").style.display = "none"
    document.querySelector(".haripathsong").style.display = "none"
    document.querySelector(".hindisong").style.display = "block"
    document.querySelector(".lofisong").style.display = "none"
    document.querySelector(".marathisong").style.display = "none"
    document.querySelector(".partysong").style.display = "none"
    document.querySelector(".punjabisong").style.display = "none"
    document.querySelector(".rapsong").style.display = "none"
    document.querySelector(".sleepsong").style.display = "none"

    document.querySelector("#left").style.left = "0"


    let hindisong1 = document.querySelector(".hindisong1>li")
    let hindisong2 = document.querySelector(".hindisong2>li")
    let hindisong3 = document.querySelector(".hindisong3>li")
    let hindisong4 = document.querySelector(".hindisong4>li")


    let play = document.querySelector("#play")
    let pause = document.querySelector("#pause")


    //event listner for play hindisong1 on click
    hindisong1.addEventListener("click", function () {
        console.log("hindisong1played cliked")
        hindisang1.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
      
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        hindisang1.play();



        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            hindisang1.pause();
            hindisang2.pause();
            hindisang3.pause();
            hindisang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            hindisang2.pause();
            hindisang3.pause();
            hindisang4.pause();
            hindisang1.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        hindisang1.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (hindisang1.currentTime / hindisang1.duration) * 100;

            let minutes = Math.floor(hindisang1.currentTime / 60);
            let seconds = Math.floor(hindisang1.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/01:19";
            name.textContent = "Tainu Khabar Nahi | Munjya | Sharvari, Abhay Verma|"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * hindisang1.duration;
                hindisang1.currentTime = time;
            })
        })





    })


    //event listner for play hindisong2 on click

    hindisong2.addEventListener("click", function () {
        console.log("hindisong2played cliked")
        hindisang2.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
       
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        hindisang2.play();
        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            hindisang1.pause();
            hindisang2.pause();
            hindisang3.pause();
            hindisang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            hindisang1.pause();
            hindisang3.pause();
            hindisang4.pause();
            hindisang2.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        hindisang2.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (hindisang2.currentTime / hindisang2.duration) * 100;

            let minutes = Math.floor(hindisang2.currentTime / 60);
            let seconds = Math.floor(hindisang2.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/02:47";
            name.textContent = "MILLIONAIRE SONG"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * hindisang2.duration;
                hindisang2.currentTime = time;
            })
        })



    })

    //event listner for play hindisong3 on click


    hindisong3.addEventListener("click", function () {
        console.log("hindisong3played cliked")
        hindisang3.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
       
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        hindisang3.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            hindisang1.pause();
            hindisang2.pause();
            hindisang3.pause();
            hindisang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            hindisang2.pause();
            hindisang1.pause();
            hindisang4.pause();
            hindisang3.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        hindisang3.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (hindisang3.currentTime / hindisang3.duration) * 100;

            let minutes = Math.floor(hindisang3.currentTime / 60);
            let seconds = Math.floor(hindisang3.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/03:09";
            name.textContent = "Aayi Nai | Stree 2 | Shraddha Kapoor |"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * hindisang3.duration;
                hindisang3.currentTime = time;
            })
        })

    })

    //event listner for play hindisong4 on click
    hindisong4.addEventListener("click", function () {
        console.log("hindisong4played cliked")
        hindisang4.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
       
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        hindisang4.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            hindisang1.pause();
            hindisang2.pause();
            hindisang3.pause();
            hindisang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            hindisang2.pause();
            hindisang1.pause();
            hindisang3.pause();
            hindisang4.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        hindisang4.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (hindisang4.currentTime / hindisang4.duration) * 100;

            let minutes = Math.floor(hindisang4.currentTime / 60);
            let seconds = Math.floor(hindisang4.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/04:00";
            name.textContent = "SUNIYAN SUNIYAN (Official Audio) Juss x MixSingh "
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * hindisang4.duration;
                hindisang4.currentTime = time;
            })
        })

    })



})




//lofi songs

lofi.addEventListener("click", function () {
    console.log("lofi card cliked")
    document.querySelector(".godsong").style.display = "none"
    document.querySelector(".drivesong").style.display = "none"
    document.querySelector(".haripathsong").style.display = "none"
    document.querySelector(".hindisong").style.display = "none"
    document.querySelector(".lofisong").style.display = "block"
    document.querySelector(".marathisong").style.display = "none"
    document.querySelector(".partysong").style.display = "none"
    document.querySelector(".punjabisong").style.display = "none"
    document.querySelector(".rapsong").style.display = "none"
    document.querySelector(".sleepsong").style.display = "none"

    document.querySelector("#left").style.left = "0"

    let lofisong1 = document.querySelector(".lofisong1>li")
    let lofisong2 = document.querySelector(".lofisong2>li")
    let lofisong3 = document.querySelector(".lofisong3>li")
    let lofisong4 = document.querySelector(".lofisong4>li")


    let play = document.querySelector("#play")
    let pause = document.querySelector("#pause")



    //event listner for play lofisong1 on click
    lofisong1.addEventListener("click", function () {
        console.log("lofisong1played cliked")
        lofisang1.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
       
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        lofisang1.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            lofisang1.pause();
            lofisang2.pause();
            lofisang3.pause();
            lofisang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            lofisang2.pause();
            lofisang3.pause();
            lofisang4.pause();
            lofisang1.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        lofisang1.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (lofisang1.currentTime / lofisang1.duration) * 100;

            let minutes = Math.floor(lofisang1.currentTime / 60);
            let seconds = Math.floor(lofisang1.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/01:19";
            name.textContent = "Main Kabhi Bhoolunga Na Tujhe || Saudebaazi ft. Aakrosh"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * lofisang1.duration;
                lofisang1.currentTime = time;
            })
        })





    })


    //event listner for play lofisong2 on click

    lofisong2.addEventListener("click", function () {
        console.log("lofisong2played cliked")
        lofisang2.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
       
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        lofisang2.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            lofisang1.pause();
            lofisang2.pause();
            lofisang3.pause();
            lofisang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            lofisang1.pause();
            lofisang3.pause();
            lofisang4.pause();
            lofisang2.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        lofisang2.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (lofisang2.currentTime / lofisang2.duration) * 100;

            let minutes = Math.floor(lofisang2.currentTime / 60);
            let seconds = Math.floor(lofisang2.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/02:47";
            name.textContent = "Falak Tak Chal Sath Mere || ( Slowed + Reverb )"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * lofisang2.duration;
                lofisang2.currentTime = time;
            })
        })



    })

    //event listner for play lofisong3 on click


    lofisong3.addEventListener("click", function () {
        console.log("lofisong3played cliked")
        lofisang3.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
      
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        lofisang3.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            lofisang1.pause();
            lofisang2.pause();
            lofisang3.pause();
            lofisang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            lofisang2.pause();
            lofisang1.pause();
            lofisang4.pause();
            lofisang3.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        lofisang3.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (lofisang3.currentTime / lofisang3.duration) * 100;

            let minutes = Math.floor(lofisang3.currentTime / 60);
            let seconds = Math.floor(lofisang3.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/03:09";
            name.textContent = "O Maahi - Lofi Mix | Slowed + Reverb |"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * lofisang3.duration;
                lofisang3.currentTime = time;
            })
        })

    })

    //event listner for play lofisong4 on click
    lofisong4.addEventListener("click", function () {
        console.log("lofisong4played cliked")
        lofisang4.currentTime = 0;

        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
       
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        lofisang4.play();
        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            lofisang1.pause();
            lofisang2.pause();
            lofisang3.pause();
            lofisang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            lofisang2.pause();
            lofisang1.pause();
            lofisang3.pause();
            lofisang4.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        lofisang4.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (lofisang4.currentTime / lofisang4.duration) * 100;

            let minutes = Math.floor(lofisang4.currentTime / 60);
            let seconds = Math.floor(lofisang4.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/04:00";
            name.textContent = "Teri jhuki nazar 🎧// song in ( SLOWED & REVERB )"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * lofisang4.duration;
                lofisang4.currentTime = time;
            })
        })

    })



})



//marathi songs

marathi.addEventListener("click", function () {
    console.log("marathi card cliked")
    document.querySelector(".godsong").style.display = "none"
    document.querySelector(".drivesong").style.display = "none"
    document.querySelector(".haripathsong").style.display = "none"
    document.querySelector(".hindisong").style.display = "none"
    document.querySelector(".lofisong").style.display = "none"
    document.querySelector(".marathisong").style.display = "block"
    document.querySelector(".partysong").style.display = "none"
    document.querySelector(".punjabisong").style.display = "none"
    document.querySelector(".rapsong").style.display = "none"
    document.querySelector(".sleepsong").style.display = "none"

    document.querySelector("#left").style.left = "0"

    let marathisong1 = document.querySelector(".marathisong1>li")
    let marathisong2 = document.querySelector(".marathisong2>li")
    let marathisong3 = document.querySelector(".marathisong3>li")
    let marathisong4 = document.querySelector(".marathisong4>li")


    let play = document.querySelector("#play")
    let pause = document.querySelector("#pause")


    //event listner for play lmarathiong1 on click
    marathisong1.addEventListener("click", function () {
        console.log("marathisong1played cliked")
        marathisang1.currentTime = 0;


        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        marathisang1.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            marathisang1.pause();
            marathisang2.pause();
            marathisang3.pause();
            marathisang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            marathisang2.pause();
            marathisang3.pause();
            marathisang4.pause();
            marathisang1.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        marathisang1.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (marathisang1.currentTime / marathisang1.duration) * 100;

            let minutes = Math.floor(marathisang1.currentTime / 60);
            let seconds = Math.floor(marathisang1.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/01:19";
            name.textContent = "Kadhi Tu Song - lofi ( Slowed reverb )"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * marathisang1.duration;
                marathisang1.currentTime = time;
            })
        })


    })



    //event listner for play marathisong2 on click

    marathisong2.addEventListener("click", function () {
        console.log("marathisong2played cliked")
        marathisang2.currentTime = 0;

        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
      
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        marathisang2.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            marathisang1.pause();
            marathisang2.pause();
            marathisang3.pause();
            marathisang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            marathisang1.pause();
            marathisang3.pause();
            marathisang4.pause();
            marathisang2.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        marathisang2.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (marathisang2.currentTime / marathisang2.duration) * 100;

            let minutes = Math.floor(marathisang2.currentTime / 60);
            let seconds = Math.floor(marathisang2.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/02:47";
            name.textContent = "Kaakan Official Video | Kaakan | "
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * marathisang2.duration;
                marathisang2.currentTime = time;
            })
        })



    })

    //event listner for play marathisong3 on click


    marathisong3.addEventListener("click", function () {
        console.log("marathisong3played cliked")
        marathisang3.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
       
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        marathisang3.play();


        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            marathisang1.pause();
            marathisang2.pause();
            marathisang3.pause();
            marathisang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            marathisang2.pause();
            marathisang1.pause();
            marathisang4.pause();
            marathisang3.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        marathisang3.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (marathisang3.currentTime / marathisang3.duration) * 100;

            let minutes = Math.floor(marathisang3.currentTime / 60);
            let seconds = Math.floor(marathisang3.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/03:09";
            name.textContent = "Jeev Rangla lofi | Marathi Lofi|"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * marathisang3.duration;
                marathisang3.currentTime = time;
            })
        })

    })

    //event listner for play marathisong4 on click
    marathisong4.addEventListener("click", function () {
        console.log("marathisong4played cliked")
        marathisang4.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        marathisang4.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            marathisang1.pause();
            marathisang2.pause();
            marathisang3.pause();
            marathisang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            marathisang2.pause();
            marathisang1.pause();
            marathisang3.pause();
            marathisang4.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        marathisang4.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (marathisang4.currentTime / marathisang4.duration) * 100;

            let minutes = Math.floor(marathisang4.currentTime / 60);
            let seconds = Math.floor(marathisang4.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/04:00";
            name.textContent = "Chandra Official Song | Chandramukhi | Marathi Song"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * marathisang4.duration;
                marathisang4.currentTime = time;
            })
        })

    })



})


//event lisstener fot partycard
party.addEventListener("click", function () {
    console.log("party card cliked")
    document.querySelector(".godsong").style.display = "none"
    document.querySelector(".drivesong").style.display = "none"
    document.querySelector(".haripathsong").style.display = "none"
    document.querySelector(".hindisong").style.display = "none"
    document.querySelector(".lofisong").style.display = "none"
    document.querySelector(".marathisong").style.display = "none"
    document.querySelector(".partysong").style.display = "block"
    document.querySelector(".punjabisong").style.display = "none"
    document.querySelector(".rapsong").style.display = "none"
    document.querySelector(".sleepsong").style.display = "none"


    document.querySelector("#left").style.left = "0"


    let partysong1 = document.querySelector(".partysong1>li")
    let partysong2 = document.querySelector(".partysong2>li")
    let partysong3 = document.querySelector(".partysong3>li")
    let partysong4 = document.querySelector(".partysong4>li")






    let play = document.querySelector("#play")
    let pause = document.querySelector("#pause")



    //event listner for play partysong1 on click
    partysong1.addEventListener("click", function () {
        console.log("partysong1played cliked")
        partysang1.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        partysang1.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            partysang1.pause();
            partysang2.pause();
            partysang3.pause();
            partysang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            partysang2.pause();
            partysang3.pause();
            partysang4.pause();
            partysang1.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        partysang1.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (partysang1.currentTime / partysang1.duration) * 100;

            let minutes = Math.floor(partysang1.currentTime / 60);
            let seconds = Math.floor(partysang1.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/01:19";
            name.textContent = "'Abhi Toh Party Shuru Hui Hai'"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * partysang1.duration;
                partysang1.currentTime = time;
            })
        })





    })


    //event listner for play partysong2 on click

    partysong2.addEventListener("click", function () {
        console.log("partysong2played cliked")
        partysang2.currentTime = 0;

        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        partysang2.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            partysang1.pause();
            partysang2.pause();
            partysang3.pause();
            partysang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            partysang1.pause();
            partysang3.pause();
            partysang4.pause();
            partysang2.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        partysang2.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (partysang2.currentTime / partysang2.duration) * 100;

            let minutes = Math.floor(partysang2.currentTime / 60);
            let seconds = Math.floor(partysang2.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/02:47";
            name.textContent = "Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * partysang2.duration;
                partysang2.currentTime = time;
            })
        })



    })

    //event listner for play partysong3 on click


    partysong3.addEventListener("click", function () {
        console.log("partysong3played cliked")
        partysang3.currentTime = 0;

        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        partysang3.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            partysang1.pause();
            partysang2.pause();
            partysang3.pause();
            partysang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            partysang2.pause();
            partysang1.pause();
            partysang4.pause();
            partysang3.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        partysang3.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (partysang3.currentTime / partysang3.duration) * 100;

            let minutes = Math.floor(partysang3.currentTime / 60);
            let seconds = Math.floor(partysang3.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/03:09";
            name.textContent = " Hookah Bar | Khiladi 786 | Akshay Kumar & Asin |"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * partysang3.duration;
                partysang3.currentTime = time;
            })
        })

    })

    //event listner for play partysong4 on click
    partysong4.addEventListener("click", function () {
        console.log("partysong4played cliked")
        partysang4.currentTime = 0;

        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
    
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        partysang4.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            partysang1.pause();
            partysang2.pause();
            partysang3.pause();
            partysang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            partysang2.pause();
            partysang1.pause();
            partysang3.pause();
            partysang4.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        partysang4.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (partysang4.currentTime / partysang4.duration) * 100;

            let minutes = Math.floor(partysang4.currentTime / 60);
            let seconds = Math.floor(partysang4.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/04:00";
            name.textContent = "HIGH ON ME (VIDEO SONG): YO YO HONEY SINGH "
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * partysang4.duration;
                partysang4.currentTime = time;
            })
        })

    })

})

//event lisstener fot punjabicard
punjabi.addEventListener("click", function () {
    console.log("punjabi card cliked")
    document.querySelector(".godsong").style.display = "none"
    document.querySelector(".drivesong").style.display = "none"
    document.querySelector(".haripathsong").style.display = "none"
    document.querySelector(".hindisong").style.display = "none"
    document.querySelector(".lofisong").style.display = "none"
    document.querySelector(".marathisong").style.display = "none"
    document.querySelector(".partysong").style.display = "none"
    document.querySelector(".punjabisong").style.display = "block"
    document.querySelector(".rapsong").style.display = "none"
    document.querySelector(".sleepsong").style.display = "none"



    document.querySelector("#left").style.left = "0"


    let punjabisong1 = document.querySelector(".punjabisong1>li")
    let punjabisong2 = document.querySelector(".punjabisong2>li")
    let punjabisong3 = document.querySelector(".punjabisong3>li")
    let punjabisong4 = document.querySelector(".punjabisong4>li")






    let play = document.querySelector("#play")
    let pause = document.querySelector("#pause")




    //event listner for play punjabisong1 on click
    punjabisong1.addEventListener("click", function () {
        console.log("punjabisong1played cliked")
        punjabisang1.currentTime = 0;

        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
       
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        punjabisang1.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            punjabisang1.pause();
            punjabisang2.pause();
            punjabisang3.pause();
            punjabisang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            punjabisang2.pause();
            punjabisang3.pause();
            punjabisang4.pause();
            punjabisang1.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        punjabisang1.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (punjabisang1.currentTime / punjabisang1.duration) * 100;

            let minutes = Math.floor(punjabisang1.currentTime / 60);
            let seconds = Math.floor(punjabisang1.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/01:19";
            name.textContent = "IDK HOW (MUSIC VIDEO) KARAN AUJLA | FOUR ME EP"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * punjabisang1.duration;
                punjabisang1.currentTime = time;
            })
        })





    })


    //event listner for play punjabisong2 on click

    punjabisong2.addEventListener("click", function () {
        console.log("punjabisong2played cliked")
        punjabisang2.currentTime = 0;

        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
       
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        punjabisang2.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            punjabisang1.pause();
            punjabisang2.pause();
            punjabisang3.pause();
            punjabisang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            punjabisang1.pause();
            punjabisang3.pause();
            punjabisang4.pause();
            punjabisang2.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        punjabisang2.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (punjabisang2.currentTime / punjabisang2.duration) * 100;

            let minutes = Math.floor(punjabisang2.currentTime / 60);
            let seconds = Math.floor(punjabisang2.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/02:47";
            name.textContent = "Diljit Dosanjh - Mombattiye | Harnaaz Sandhu"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * punjabisang2.duration;
                punjabisang2.currentTime = time;
            })
        })



    })

    //event listner for play punjabisong3 on click


    punjabisong3.addEventListener("click", function () {
        console.log("punjabisong3played cliked")
        punjabisang3.currentTime = 0;

        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
       
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        punjabisang3.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            punjabisang1.pause();
            punjabisang2.pause();
            punjabisang3.pause();
            punjabisang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            punjabisang2.pause();
            punjabisang1.pause();
            punjabisang4.pause();
            punjabisang3.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        punjabisang3.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (punjabisang3.currentTime / punjabisang3.duration) * 100;

            let minutes = Math.floor(punjabisang3.currentTime / 60);
            let seconds = Math.floor(punjabisang3.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/03:09";
            name.textContent = "BAD MUNDA : Jass Manak Ft. Emiway Bantai |"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * punjabisang3.duration;
                punjabisang3.currentTime = time;
            })
        })

    })

    //event listner for play punjabisong4 on click
    punjabisong4.addEventListener("click", function () {
        console.log("punjabisong4played cliked")
        punjabisang4.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        punjabisang4.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            punjabisang1.pause();
            punjabisang2.pause();
            punjabisang3.pause();
            punjabisang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            punjabisang2.pause();
            punjabisang1.pause();
            punjabisang3.pause();
            punjabisang4.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        punjabisang4.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (punjabisang4.currentTime / punjabisang4.duration) * 100;

            let minutes = Math.floor(punjabisang4.currentTime / 60);
            let seconds = Math.floor(punjabisang4.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/04:00";
            name.textContent = "Shubh - Cheques (Official Music Video)"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * punjabisang4.duration;
                punjabisang4.currentTime = time;
            })
        })

    })


})


//event lisstener fot rapcard
rap.addEventListener("click", function () {
    console.log("rap card cliked")
    document.querySelector(".godsong").style.display = "none"
    document.querySelector(".drivesong").style.display = "none"
    document.querySelector(".haripathsong").style.display = "none"
    document.querySelector(".hindisong").style.display = "none"
    document.querySelector(".lofisong").style.display = "none"
    document.querySelector(".marathisong").style.display = "none"
    document.querySelector(".partysong").style.display = "none"
    document.querySelector(".punjabisong").style.display = "none"
    document.querySelector(".rapsong").style.display = "block"
    document.querySelector(".sleepsong").style.display = "none"



    document.querySelector("#left").style.left = "0"


    let rapsong1 = document.querySelector(".rapsong1>li")
    let rapsong2 = document.querySelector(".rapsong2>li")
    let rapsong3 = document.querySelector(".rapsong3>li")
    let rapsong4 = document.querySelector(".rapsong4>li")






    let play = document.querySelector("#play")
    let pause = document.querySelector("#pause")






    //event listner for play rapsong1 on click
    rapsong1.addEventListener("click", function () {
        console.log("rapsong1played cliked")
        rapsang1.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
       
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        rapsang1.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            rapsang1.pause();
            rapsang2.pause();
            rapsang3.pause();
            rapsang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            rapsang2.pause();
            rapsang3.pause();
            rapsang4.pause();
            rapsang1.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        rapsang1.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (rapsang1.currentTime / rapsang1.duration) * 100;

            let minutes = Math.floor(rapsang1.currentTime / 60);
            let seconds = Math.floor(rapsang1.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/01:19";
            name.textContent = "Hanumankind – Big Dawgs | Ft. Kalmi"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * rapsang1.duration;
                rapsang1.currentTime = time;
            })
        })





    })


    //event listner for play rapsong2 on click

    rapsong2.addEventListener("click", function () {
        console.log("rapsong2played cliked")
        rapsang2.currentTime = 0;

        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        rapsang2.play();
        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            rapsang1.pause();
            rapsang2.pause();
            rapsang3.pause();
            rapsang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            rapsang1.pause();
            rapsang3.pause();
            rapsang4.pause();
            rapsang2.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        rapsang2.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (rapsang2.currentTime / rapsang2.duration) * 100;

            let minutes = Math.floor(rapsang2.currentTime / 60);
            let seconds = Math.floor(rapsang2.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/02:47";
            name.textContent = "Jaadugar | Paradox | Hustle 2.0"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * rapsang2.duration;
                rapsang2.currentTime = time;
            })
        })



    })

    //event listner for play rapsong3 on click


    rapsong3.addEventListener("click", function () {
        console.log("rapsong3played cliked")
        rapsang3.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        rapsang3.play();
        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            rapsang1.pause();
            rapsang2.pause();
            rapsang3.pause();
            rapsang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            rapsang2.pause();
            rapsang1.pause();
            rapsang4.pause();
            rapsang3.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        rapsang3.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (rapsang3.currentTime / rapsang3.duration) * 100;

            let minutes = Math.floor(rapsang3.currentTime / 60);
            let seconds = Math.floor(rapsang3.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/01:19";
            name.textContent = "O Sajna (Official Video) - Badshah X Divine X Nikhita Gandhi "
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * rapsang3.duration;
                rapsang3.currentTime = time;
            })
        })
    })

    //event listner for play rapsong4 on click
    rapsong4.addEventListener("click", function () {
        console.log("rapsong4played cliked")
        rapsang4.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
      
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        rapsang4.play();
        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            rapsang1.pause();
            rapsang2.pause();
            rapsang3.pause();
            rapsang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            rapsang2.pause();
            rapsang1.pause();
            rapsang3.pause();
            rapsang4.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        rapsang4.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (rapsang4.currentTime / rapsang4.duration) * 100;

            let minutes = Math.floor(rapsang4.currentTime / 60);
            let seconds = Math.floor(rapsang4.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/04:00";
            name.textContent = "BONITA (VIDEO SONG): @YoYoHoneySingh |"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * rapsang4.duration;
                rapsang4.currentTime = time;
            })
        })

    })

})



//event lisstener fot sleepcard
sleep.addEventListener("click", function () {
    console.log("sleep card cliked")
    document.querySelector(".godsong").style.display = "none"
    document.querySelector(".drivesong").style.display = "none"
    document.querySelector(".haripathsong").style.display = "none"
    document.querySelector(".hindisong").style.display = "none"
    document.querySelector(".lofisong").style.display = "none"
    document.querySelector(".marathisong").style.display = "none"
    document.querySelector(".partysong").style.display = "none"
    document.querySelector(".punjabisong").style.display = "none"
    document.querySelector(".rapsong").style.display = "none"
    document.querySelector(".sleepsong").style.display = "block"




    document.querySelector("#left").style.left = "0"


    let sleepsong1 = document.querySelector(".sleepsong1>li")
    let sleepsong2 = document.querySelector(".sleepsong2>li")
    let sleepsong3 = document.querySelector(".sleepsong3>li")
    let sleepsong4 = document.querySelector(".sleepsong4>li")






    let play = document.querySelector("#play")
    let pause = document.querySelector("#pause")








    //event listner for play sleepsong1 on click
    sleepsong1.addEventListener("click", function () {
        console.log("sleepsong1played cliked")
        sleepsang1.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.pause();
        sleepsang1.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            sleepsang1.pause();
            sleepsang2.pause();
            sleepsang3.pause();
            sleepsang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            sleepsang2.pause();
            sleepsang3.pause();
            sleepsang4.pause();
            sleepsang1.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        sleepsang1.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (sleepsang1.currentTime / sleepsang1.duration) * 100;

            let minutes = Math.floor(sleepsang1.currentTime / 60);
            let seconds = Math.floor(sleepsang1.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/01:19";
            name.textContent = "Ve Kamleya (Slowed + Reverb) | Arijit Singh, Shreya Ghoshal"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * sleepsang1.duration;
                sleepsang1.currentTime = time;
            })
        })





    })


    //event listner for play sleepsong2 on click

    sleepsong2.addEventListener("click", function () {
        console.log("sleepsong2played cliked")
        sleepsang2.currentTime = 0;
        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
       
        sleepsang3.pause();
        sleepsang4.pause();
        sleepsang2.play();
        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            sleepsang1.pause();
            sleepsang2.pause();
            sleepsang3.pause();
            sleepsang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            sleepsang1.pause();
            sleepsang3.pause();
            sleepsang4.pause();
            sleepsang2.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        sleepsang2.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (sleepsang2.currentTime / sleepsang2.duration) * 100;

            let minutes = Math.floor(sleepsang2.currentTime / 60);
            let seconds = Math.floor(sleepsang2.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/02:47";
            name.textContent = "YE TU NE KYA KIYA | Slowed & Reverb|#youtube)"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * sleepsang2.duration;
                sleepsang2.currentTime = time;
            })
        })



    })

    //event listner for play sleepsong3 on click


    sleepsong3.addEventListener("click", function () {
        console.log("sleepsong3played cliked")
        sleepsang3.currentTime = 0;

        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
    
        sleepsang4.pause();
        sleepsang3.play();

        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            sleepsang1.pause();
            sleepsang2.pause();
            sleepsang3.pause();
            sleepsang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            sleepsang2.pause();
            sleepsang1.pause();
            sleepsang4.pause();
            sleepsang3.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        sleepsang3.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (sleepsang3.currentTime / sleepsang3.duration) * 100;

            let minutes = Math.floor(sleepsang3.currentTime / 60);
            let seconds = Math.floor(sleepsang3.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/01:19";
            name.textContent = "Dil ibadat slowed Reverb"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * sleeppsang3.duration;
                sleepsang3.currentTime = time;
            })
        })
    })

    //event listner for play sleepsong4 on click
    sleepsong4.addEventListener("click", function () {
        console.log("sleepsong4played cliked")
        sleepsang4.currentTime = 0;

        sang1.pause();
        sang2.pause();
        sang3.pause();
        sang4.pause();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
        hindisang1.pause();
        hindisang2.pause();
        hindisang3.pause();
        hindisang4.pause();
        lofisang1.pause();
        lofisang2.pause();
        lofisang3.pause();
        lofisang4.pause();
        marathisang1.pause();
        marathisang2.pause();
        marathisang3.pause();
        marathisang4.pause();
        partysang1.pause();
        partysang2.pause();
        partysang3.pause();
        partysang4.pause();
        punjabisang1.pause();
        punjabisang2.pause();
        punjabisang3.pause();
        punjabisang4.pause();
        rapsang1.pause();
        rapsang2.pause();
        rapsang3.pause();
        rapsang4.pause();
        sleepsang1.pause();
        sleepsang2.pause();
        sleepsang3.pause();
        sleepsang4.play();
        play.style.display = "none"
        pause.style.display = "block"

        pause.addEventListener("click", function () {
            sleepsang1.pause();
            sleepsang2.pause();
            sleepsang3.pause();
            sleepsang4.pause();
            play.style.display = "block"
            pause.style.display = "none"
        })
        play.addEventListener("click", function () {
            sleepsang2.pause();
            sleepsang1.pause();
            sleepsang3.pause();
            sleepsang4.play();
            play.style.display = "none"
            pause.style.display = "block"
        })

        sleepsang4.addEventListener("timeupdate", function () {
            let name = document.querySelector("#songinfo")
            let time = document.querySelector("#songtime")
            let seekbar = document.querySelector("#seekbar")
            let value = (sleepsang4.currentTime / sleepsang4.duration) * 100;

            let minutes = Math.floor(sleepsang4.currentTime / 60);
            let seconds = Math.floor(sleepsang4.currentTime % 60);
            if (seconds < 10) { seconds = "0" + seconds; }
            time.textContent = minutes + ":" + seconds + "/01:19";
            name.textContent = "KAHO NA KAHO [ Slowed Reverb ] Lofi Song Murder❤️"
            seekbar.value = value;
            seekbar.addEventListener("mousedown", function () {
                seekbar.setAttribute("data-dragging", true)
            })
            seekbar.addEventListener("input", function () {
                let time = (seekbar.value / 100) * sleepsang4.duration;
                sleepsang4.currentTime = time;
            })
        })

    })





























})








