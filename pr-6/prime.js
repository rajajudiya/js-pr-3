let number = 24;
let p = 1;
let prime = document.getElementById("prime");

while (p < number) {
    if (number % p == 0) {
        prime.innerHTML += (`${number} is not a prime number <br/>`);
        break;
    }
    else {
        prime.innerHTML += (`${number} is a  prime number <br/>`);
    }
    p++;
}