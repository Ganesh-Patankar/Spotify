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


//songs in drivesong
let haripathsang1 = document.querySelector("#haripathsong1")
let haripathsang2 = document.querySelector("#haripathsong2")
let haripathsang3 = document.querySelector("#haripathsong3")
let haripathsang4 = document.querySelector("#haripathsong4")




//element for cards
let god = document.querySelector(".god")
let drive = document.querySelector(".drive")
let haripath = document.querySelector(".haripath")



//event lisstener fot godcard
god.addEventListener("click", function () {
    console.log("god card cliked")
    document.querySelector(".godsong").style.display = "block"
    document.querySelector(".drivesong").style.display = "none"
    document.querySelector(".haripathsong").style.display = "none"


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
        haripathsang2.pause();
        haripathsang1.pause();
        haripathsang4.pause();
        haripathsang3.play();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
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
        haripathsang2.pause();
        haripathsang1.pause();
        haripathsang4.pause();
        haripathsang3.play();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
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
        haripathsang2.pause();
        haripathsang1.pause();
        haripathsang4.pause();
        haripathsang3.play();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();

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
        haripathsang2.pause();
        haripathsang1.pause();
        haripathsang4.pause();
        haripathsang3.play();
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
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






//drive songs

drive.addEventListener("click", function () {
    console.log("drive card cliked")
    document.querySelector(".godsong").style.display = "none"
    document.querySelector(".drivesong").style.display = "block"
    document.querySelector(".haripathsong").style.display = "none"
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
        drivesang1.play();
        haripathsang2.pause();
        haripathsang1.pause();
        haripathsang4.pause();
        haripathsang3.play();
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
        drivesang2.play();
        haripathsang2.pause();
        haripathsang1.pause();
        haripathsang4.pause();
        haripathsang3.play();
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
        drivesang2.pause();
        drivesang1.pause();
        drivesang4.pause();
        drivesang3.play();
        haripathsang2.pause();
        haripathsang1.pause();
        haripathsang4.pause();
        haripathsang3.play();
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
        drivesang2.pause();
        drivesang1.pause();
        drivesang3.pause();
        drivesang4.play();
        haripathsang2.pause();
        haripathsang1.pause();
        haripathsang4.pause();
        haripathsang3.play();
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
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang2.pause();
        haripathsang3.pause();
        haripathsang4.pause();
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
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang1.pause();
        haripathsang3.pause();
        haripathsang4.pause();
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
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();

        haripathsang2.pause();
        haripathsang1.pause();
        haripathsang4.pause();
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

    //event listner for play song4 on click
    haripathsong4.addEventListener("click", function () {
        console.log("haripathsong4played cliked")
        haripathsang4.currentTime = 0;
        drivesang1.pause();
        drivesang2.pause();
        drivesang3.pause();
        drivesang4.pause();
        haripathsang2.pause();
        haripathsang1.pause();
        haripathsang3.pause();
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