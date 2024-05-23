let no = 9721;
let copy = no;
let sum = no;

while (copy > 9) {
    sum = 0;
    while (copy > 0) {
        sum += copy % 10;
        copy = parseInt(copy / 10);
    }
    copy = sum;
}

if (sum == 1) {

    document.getElementById("yes").innerHTML = `${no} is a Magic number`;
} else {
    document.getElementById("no").innerHTML = `${no} is not a Magic number`;

}