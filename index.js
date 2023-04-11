var c = document.getElementById("StartCanvas");
var ctx = c.getContext("2d");
ctx.font = "900 100px Sono";
ctx.fillStyle = "#"
ctx.fillText("RUNE RUNNER", 325, 150);

var d = document.getElementById("SetupBackground");
var dtx = d.getContext("2d");
dtx.font = "900 100px Sono";
dtx.fillText("GAME SETTINGS", 275, 100);

let Difficulty = "-DIFFICULTY-"
function BOpen() {
    let mapState = document.getElementById("Backpack").textContent
    if (mapState  == "-BACKPACK-") {
        let saddleOpen = document.getElementById("SaddleOpen")
        saddleOpen.play()
        document.getElementById("Backpack").innerHTML="-CLOSE-"
        document.getElementById("GameScreen").className = "Open"

        
    } else if (mapState == "-CLOSE-") {
        let saddleClose = document.getElementById("SaddleClose")
        saddleClose.play()
        document.getElementById("Backpack").innerHTML="-BACKPACK-"
        document.getElementById("GameScreen").className = "Closed"
    }
}

function StartGame() {
    document.getElementById("SetupDiv").className = "SettingsS"
    document.getElementById("StartCanvas").className = "Hide"
    document.getElementById("StartButton").className = "Hide"
    document.getElementById("StartButtonSkip").className = "Hide"
    document.getElementById("WhatName").className = "SettingsS"
    document.getElementById("SetupBackground").className = "Show"
    document.getElementById("Boy").className = "Boy"
    document.getElementById("Girl").className = "Girl"
    document.getElementById("Submit").className = "NotReady"
    document.getElementById("difficulty").className = "SelectedD"
    document.getElementById("Tut").innerHTML = "True"
    document.getElementById("SlowTextSpeed").className = "Show"
    document.getElementById("MediumTextSpeed").className = "Show"
    document.getElementById("FastTextSpeed").className = "Show"
    document.getElementById("SlowLabel").className = "Show"
    document.getElementById("MediumLabel").className = "Show"
    document.getElementById("FastLabel").className = "Show"
    document.getElementById("ScrollSpeed").className = "Show"
    document.getElementById("Credits").className = "Hide"
}
function StartNoTut() {
    document.getElementById("SetupDiv").className = "SettingsS"
    document.getElementById("StartCanvas").className = "Hide"
    document.getElementById("StartButton").className = "Hide"
    document.getElementById("StartButtonSkip").className = "Hide"
    document.getElementById("WhatName").className = "SettingsS"
    document.getElementById("SetupBackground").className = "Show"
    document.getElementById("Boy").className = "Boy"
    document.getElementById("Girl").className = "Girl"
    document.getElementById("Submit").className = "NotReady"
    document.getElementById("difficulty").className = "SelectedD"
    document.getElementById("Tut").innerHTML = "False"
    document.getElementById("SlowTextSpeed").className = "Show"
    document.getElementById("MediumTextSpeed").className = "Show"
    document.getElementById("FastTextSpeed").className = "Show"
    document.getElementById("SlowLabel").className = "Show"
    document.getElementById("MediumLabel").className = "Show"
    document.getElementById("FastLabel").className = "Show"
    document.getElementById("ScrollSpeed").className = "Show"
    document.getElementById("Credits").className = "Hide"
}

function Boy() {
    document.getElementById("Boy").className = "Selected"
    document.getElementById("Girl").className = "Girl"
    document.getElementById("Gender").innerHTML = "Boy"
}
function Girl() {
    document.getElementById("Girl").className = "Selected"
    document.getElementById("Boy").className = "Boy"
    document.getElementById("Gender").innerText = "Girl"
}
function NameInput() {
    let NameEntered = document.getElementById("WhatName").textContent
    if (NameEntered.value !== null) {
        document.getElementById("difficulty").className = "difficulty"
    } else if (NameEntered.value == null) {
        document.getElementById("difficulty").className = "SelectedD"
        document.getElementById("difficulty").innerHTML = "-DIFFICULTY-"
    }
}
function cycleDifficulty() {
    let DifficultyClass = document.getElementById("difficulty").className
    
    if (DifficultyClass !== "SelectedD") {
    let Difficulty = document.getElementById("difficulty").textContent
    document.getElementById("Submit").className = "Ready"
    if (Difficulty == "-DIFFICULTY-") {
        document.getElementById("difficulty").innerHTML = "-EASY-"
        document.getElementById("difficulty").className = "easy"
    } else if (Difficulty == "-EASY-") {
        document.getElementById("difficulty").innerHTML = "-MEDIUM-"
        document.getElementById("difficulty").className = "medium"
    } else if (Difficulty == "-MEDIUM-") {
        document.getElementById("difficulty").innerHTML = "-HARD-"
        document.getElementById("difficulty").className = "hard"
    } else if (Difficulty == "-HARD-") {
        document.getElementById("difficulty").innerHTML = "-MASTER-"
        document.getElementById("difficulty").className = "master"
    } else if (Difficulty == "-MASTER-") {
        document.getElementById("difficulty").innerHTML = "-EASY-"
        document.getElementById("difficulty").className = "easy"
    }
}
}

