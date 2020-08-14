function changeText() {

    var innerString = String(document.getElementById("demo").innerHTML);

    if (document.getElementById("demo").innerHTML == innerString) {
        document.getElementById("demo").innerHTML = "Monster Man ! ! !";
    }
    else {
        document.getElementById("demo").innerHTML = "BLACK";
    }
}
