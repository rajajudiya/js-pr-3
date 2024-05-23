let num = 175;
let rem, 
sum = 0;
let len = num; 

let temp = num; 

while (temp > 0) {
    rem = temp % 10;
    sum += (rem, len); 
    temp = (temp / 10);
    len--;
}

if (sum === num) {
    console.log(num + " is a Disarium number");
} else {
    console.log(num + " is not a Disarium number");
}