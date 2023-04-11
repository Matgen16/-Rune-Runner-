var ScrollTo = 0;
var ScrollSpeed = 25
var Click = false;
window.scrollTo({ top: 0, left: 0, behavior: 'instant', });
setTimeout(ScrollDown, 100)
function ScrollDown() {
    ScrollSpeed = document.getElementById("ScrollSpeed").textContent
    if (ScrollTo < 1000) {
        ScrollTo++
        window.scroll({top: ScrollTo, behavior: "smooth"})
        setTimeout(ScrollDown, ScrollSpeed)
    }
}
var F = 0
function changeFav() {
    F++
    if (F == 0) {
        document.getElementById("Favicon").href="Pictures/Rune-Ground.png"
    } else if (F == 1) {
        document.getElementById("Favicon").href="Pictures/Rune-Water.png"
    } else if (F == 2) {
        document.getElementById("Favicon").href="Pictures/Rune-Wind.png"
    } else if (F == 3) {
        document.getElementById("Favicon").href="Pictures/Rune-Electricity.png"
    } else if (F == 4) {
        document.getElementById("Favicon").href="Pictures/Rune-Fire.png"
    } else if (F == 5) {
        document.getElementById("Favicon").href="Pictures/Rune-Light.png"
    } else if (F == 6) {
        document.getElementById("Favicon").href="Pictures/Rune-Time.png"
    } else if (F == 7) {
        document.getElementById("Favicon").href="Pictures/Rune-Life.png"
        F = -1;
    }
    setTimeout(changeFav, 10)
}
changeFav()