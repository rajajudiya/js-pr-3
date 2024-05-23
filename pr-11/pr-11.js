let b;
let hypen = "";

for (b = 1; b <= 10; b++) {
    hypen += b;
    if (b < 10) {
        hypen += "-";
    }

}
document.getElementById("hypen").innerHTML = hypen;