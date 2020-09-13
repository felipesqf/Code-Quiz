function init() {
    var storedscore = JSON.parse(localStorage.getItem("score"));
    if (storedscore !== null) {
      score = storedTodos;
    document.getElementById("0").innerHTML = storedscore;
    }
}
