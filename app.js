//start with number input variable
let number = Number(prompt("What is your bill amount?"));

//take the user's bill amount
let sum = number;
//take bill and times by tax (7%)
let percy1 = sum*.07+sum;
//take bill+tax and times by tip (5%)
let percy2 = percy1*.05;
//take bill+tax+tip for total
let totalPrice = percy1+percy2;

document.body.innerHTML=totalPrice;

