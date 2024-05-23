let a = 0;
let b = 1;
let c;

while (a < 100) {
    document.write(a + "<br />");
    c = a + b;
    a = b;
    b = c;

}