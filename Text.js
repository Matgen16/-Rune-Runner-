var i = 0;
var P = 0;
var textNumber = 1; 
function Text1() {
    i = 0
    var Name = document.getElementById("WhatName").value;
    document.getElementById("textNumber").innerHTML ="2"
    Write1()
}
function Text2() {
    i = 0

    document.getElementById("textNumber").innerHTML ="3"
    document.getElementById("IntroText").innerHTML = ""
    Write2()
}
function Text3() {
    i=0
    document.getElementById("textNumber").innerHTML="4"
    document.getElementById("IntroText").innerHTML = ""
    Write3()
}
function Text4() {
    i=0
    document.getElementById("textNumber").innerHTML="5"
    document.getElementById("IntroText").innerHTML = ""
    Write4()
}
function Text5() {
    i=0
    document.getElementById("textNumber").innerHTML="6"
    document.getElementById("IntroText").innerHTML = ""
    Write5()
}
function Text6() {
    i=0
    document.getElementById("textNumber").innerHTML="Done"
    document.getElementById("IntroText").innerHTML = ""
    Write6()
}

function Write1() {
    var Name = document.getElementById("WhatName").value;
    var speed = document.getElementById("Speed").textContent

    var txt = "Hello ".concat(Name.concat(", my name is Professor Johnson."));
    if (i < txt.length) {
        document.getElementById("IntroText").innerHTML += txt.charAt(i);
        i++;
        var IntroText = document.getElementById("IntroText").textContent
        Prog()
        if (i == 43) {
            document.getElementById("IntroText").innerHTML = IntroText.concat("-".concat("\n"))
            document.getElementById("IntroText").className = "n"
        } else {
            document.getElementById("IntroText").className = "Show"
        }
        TextSound.play()
        setTimeout(Write1, speed);
    };
};
function Write2() {
    var speed = document.getElementById("Speed").textContent

    var txt = "Welcome to Rune Runner.";
    if (i < txt.length) {
        document.getElementById("IntroText").innerHTML += txt.charAt(i);
        i++;
        Prog()
        TextSound.play()
        setTimeout(Write2, speed);
    };
};
function Write3() {
    var speed = document.getElementById("Speed").textContent
    var txt = "In Rune Runner, you will explore land like\nthe Roteron Kingdom."; 

    if (i < txt.length) {
        document.getElementById("IntroText").innerHTML += txt.charAt(i);
        i++;
        if (i >= 44) {
            document.getElementById("IntroText").className = "n"
        } else {
            document.getElementById("IntroText").className = "Show"
        }
        Prog()
        TextSound.play()
        setTimeout(Write3, speed);
    };

};
function Write4() {
    var speed = document.getElementById("Speed").textContent
    var txt = "You will explore while collecting Runes."; 
    document.getElementById("IntroText").className = "Show"
    if (i < txt.length) {
        document.getElementById("IntroText").innerHTML += txt.charAt(i);
        i++;
        Prog()
        TextSound.play()
        setTimeout(Write4, speed);
    };

};
function Write5() {
    var speed = document.getElementById("Speed").textContent
    var txt = "Runes are special stones that you can use a \nRune Key to harness it's power."; 

    if (i < txt.length) {
        document.getElementById("IntroText").innerHTML += txt.charAt(i);
        i++;
        Prog()
        if (i >= 46) {
            document.getElementById("IntroText").className = "n"
        } else {
            document.getElementById("IntroText").className = "Show"
        }
        TextSound.play()
        setTimeout(Write5, speed);
    };

};
function Write6() {
    var speed = document.getElementById("Speed").textContent
    var txt = "Good luck, and see you later!"; 

    if (i < txt.length) {
        document.getElementById("IntroText").innerHTML += txt.charAt(i);
        i++;
        Prog()
        document.getElementById("IntroText").className = "Show"
        TextSound.play()
        setTimeout(Write6, speed);
    };

};
function Next() {
    var textNumber = document.getElementById("textNumber").textContent
    if (textNumber == "2") {
        Text2()
    } else if (textNumber == "3") {
        Text3()
    } else if (textNumber == "4") {
        Text4()
    } else if (textNumber == "5") {
        Text5()
    } else if (textNumber == "6") {
        Text6()
    } else if (textNumber == "Done") {
        
    }
}
function Prog() {

    P++
    document.getElementById("IntroProgress").value = P
}