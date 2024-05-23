let a = 15;
let b = 0;
let c = a;
let yes = "enter number is an armstrong number"
let no = "enter number is not  an armstrong number"

while (c > 0) {
    let r = c % 10;
    b += r ** 3;
    c = parseInt(c / 10);


}

document.getElementById("a").innerHTML = a;

if (b == a) {
    document.querySelector("h2").innerHTML = yes;
} else {
    document.querySelector("h2").innerHTML = no;

}