var test1 = [];
for( var i = 0; i < 4; i++){
    test1[i] = localStorage.getItem(localStorage.key(i));
    document.getElementById(i+"place").innerHTML = test1[i];
}