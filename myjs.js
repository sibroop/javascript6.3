
function myFunction(){
var text = "";

var i;

for (i = 1; i <= 100; i++) {

    if (i % 15 === 0) {
        text += "fizzbuzz"+"<br>";
    }
    else if (i % 3 === 0) {
        text += "fizz"+"<br>";
    }
    else if (i % 5 === 0) {
        text += "buzz"+"<br>";
    }
    else {
        text += i+"<br>";
    }

}

document.getElementById("list").innerHTML += text;
}