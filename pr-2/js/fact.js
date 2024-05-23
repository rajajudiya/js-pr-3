let f = 1, fact = 1
while (f <= 3) {
    fact = fact * f
    f++;
}

document.querySelector(".fact").innerHTML = " Fact is : = " + fact;