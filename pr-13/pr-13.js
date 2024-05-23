

let c = " ";
let patternq = document.getElementById("q");
let numrows = 5;

for (p = numrows; p >= 1; p--) {
    for (let j = 5; j >= p; j--) {
        c += j + " ";
    }

    c += "<br/>";
}

patternq.innerHTML = (c);