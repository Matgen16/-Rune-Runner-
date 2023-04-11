function SetupDone() {
    let Difficulty = document.getElementById("difficulty").textContent
    let NameEntered = document.getElementById("WhatName").textContent;
    if (Difficulty !== "-DIFFICULTY-" && NameEntered.value !== null) {
        document.getElementById("SetupBackground").className = "Hide"
        document.getElementById("WhatName").style.visibility = "hidden"
        document.getElementById("Boy").className = "SettingsH"
        document.getElementById("Girl").className = "SettingsH"
        document.getElementById("Submit").className = "SettingsH"
        document.getElementById("difficulty").className = "SettingsH"
        document.getElementById("SlowTextSpeed").className = "Hide"
        document.getElementById("MediumTextSpeed").className = "Hide"
        document.getElementById("FastTextSpeed").className = "Hide"
        document.getElementById("SlowLabel").className = "Hide"
        document.getElementById("MediumLabel").className = "Hide"
        document.getElementById("FastLabel").className = "Hide"
        document.getElementById("ScrollSpeed").className = "Hide"
        document.getElementById("IntroProgress").className = "Show"
        let Tut = document.getElementById("Tut").textContent
        if (Tut == "False") {
        } else if (Tut == "True") {
            document.getElementById("Proffesor").className = "Show"
            document.getElementById("Intro").className = "Proffesor" 
            Text1()
        }

    }
}
function showNext() {
    document.getElementById("Next").className = "showNext"
}
function hideNext() {
    document.getElementById("Next").className = "hideNext"
}

function Slow() {
    document.getElementById("Speed").innerHTML = "200"
    document.getElementById("SlowLabel").className = "Select"
    document.getElementById("MediumLabel").className = "Show"
    document.getElementById("FastLabel").className = "Show"
}
function Medium() {
    document.getElementById("Speed").innerHTML = "100"
    document.getElementById("SlowLabel").className = "Show"
    document.getElementById("MediumLabel").className = "Select"
    document.getElementById("FastLabel").className = "Show"
}
function Fast() {
    document.getElementById("Speed").innerHTML = "10"
    document.getElementById("SlowLabel").className = "Show"
    document.getElementById("MediumLabel").className = "Show"
    document.getElementById("FastLabel").className = "Select"
}

function SlowHover() {
    document.getElementById("SlowLabel").className = "Hovered"
}
function MediumHover() {
    document.getElementById("MediumLabel").className = "Hovered"
}
function FastHover() {
    document.getElementById("FastLabel").className = "Hovered"
}
function SlowNoHover() {
    document.getElementById("SlowLabel").className = "Show"
    CheckSelected()
}
function MediumNoHover() {
    document.getElementById("MediumLabel").className = "Show"
    CheckSelected()
}
function FastNoHover() {
    document.getElementById("FastLabel").className = "Show"
    CheckSelected()
}
function CheckSelected() {
    let SlowSelect = document.getElementById("SlowTextSpeed").checked
    let MediumSelect = document.getElementById("MediumTextSpeed").checked
    let FastSelect = document.getElementById("FastTextSpeed").checked

    if (SlowSelect == true) {
        document.getElementById("SlowLabel").className = "Select"
    } else {
        document.getElementById("SlowLabel").className = "Show"
    }
    if (MediumSelect == true) {
        document.getElementById("MediumLabel").className = "Select"
    } else {
        document.getElementById("MediumLabel").className = "Show"
    }
    if (FastSelect == true) {
        document.getElementById("FastLabel").className = "Select"
    } else {
        document.getElementById("FastLabel").className = "Show"
    }
}
var F = 0
function changeFav() {
    F++
    if (Click == false) {
        if (F == 0) {
            document.getElementById("Favicon").href="Pictures/Rune Ground.png"
        } else if (F == 1) {
            document.getElementById("Favicon").href="Pictures/Rune Water.png"
        } else if (F == 2) {
            document.getElementById("Favicon").href="Pictures/Rune Wind.png"
        } else if (F == 3) {
            document.getElementById("Favicon").href="Pictures/Rune Storm.png"
        } else if (F == 4) {
            document.getElementById("Favicon").href="Pictures/Rune Fire.png"
        } else if (F == 5) {
            document.getElementById("Favicon").href="Pictures/Rune Light.png"
        } else if (F == 6) {
            document.getElementById("Favicon").href="Pictures/Rune Time.png"
        } else if (F == 7) {
            document.getElementById("Favicon").href="Pictures/Rune Life.png"
            F = -1;
        }
    }
    setTimeout(changeFav, 10)
}
var Click = false
changeFav()
    function FavClick() {
    if (Click == false) {
        Click = true
    } else if (Click == true) {
        Click = false
    }
}