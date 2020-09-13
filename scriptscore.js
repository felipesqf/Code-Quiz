var score = [];
init();

function init() {
    var storedscore = JSON.parse(localStorage.getItem("score"));
    if (storedscore !== null) {
        score = storedscore
    document.getElementById("0").innerHTML = score[0];
    document.getElementById("1").innerHTML = score[1];
    document.getElementById("2").innerHTML = score[2];
    document.getElementById("3").innerHTML = score[3];
    }
}
