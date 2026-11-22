//                              ASSIGNMENT 1

//SECTION -1 VARIABLE AND OPERATORS

//Q.1 BASIC CALCULATOR
let a = 10;
let b = 20;
console.log("a+b:", a + b);
console.log("a-b:", a - b);
console.log("a*b:", a * b);
console.log("a/b:", a / b);

//Q.2 Swap two number 

let c = 2;
let d = 4;
console.log("before the swap the value of the c & d is:", c, d);

let temp = c;
c = d;
d = temp;
console.log("after the swap the value of the c & d is:", c, d);


//Q.3 Student marks
let sub1 = 40;
let sub2 = 80;
let sub3 = 90;
let total_marks = sub1 + sub2 + sub3;
console.log("total_marks:", total_marks);
let averag = total_marks / 3;
console.log("averag: ", averag);

let percentage = total_marks * 100 / 300;
console.log("percentage:", percentage);

//Q.4 Shopping bill

let product_price = 400;
let quantity = 2;
let to_bill = product_price * quantity;
console.log("to_bill:", to_bill);

let discount_amount = to_bill * 10 / 100;
console.log("discount_amount:", discount_amount);

let final_bill = to_bill - discount_amount;
console.log("final_bill:", final_bill);


//Q.4 Area calculator

let length = 10;
let width = 5;

let Ara_rec = length * width;
console.log("Area of rectangle is:", Ara_rec);


let peri_rec = 2 * (length + width);
console.log("Perimiter  of rectangle is:", peri_rec);


//SECTION -2            COMPARISON AND THE LOGICAL OPERATOR


//Q.6 EVEN OR ODD

let num = 5;
if (num % 2 == 0) {
    console.log("number is even ");

}
else {
    console.log("number is odd");

}

//Q.7 POSITIVE , NEGATIVE OR ZERO

if (num > 0) {
    console.log("number is positive");
}
else if (num < 0) {
    console.log("number is negative");


}
else {
    console.log("number is zero");

}

//Q.8 Greater number
let num1 = 500;
let num2 = 50;

if (num1 > num2) {
    console.log("first number is greater");

}
else if (num1 < num2) {
    console.log("second number is greater");

}
else {
    console.log("both number is equal");

}

//Q.9 largest between the three number

let x = 10;
let y = 500;
let z = 200;

if (x > y && x > z) {
    console.log("largest number is x:", x);

}
else if (y > z && y > x) {
    console.log("largest number is y:", y);

}
else {
    console.log("largest number is z:", z);

}

//Q.10 DRIVING ELIGIBILITY

let age = 20;
let haslisense = true;
if (age >= 18 && haslisense == true) {
    console.log("you can drive");

}
else {
    console.log("you can not drive");

}

//Q.11 VOTING ELEIGIBLITY

let age2 = 20;

if (age >= 18) {
    console.log("you can VOTE");

}
else {
    console.log("you can not VOTE");

}


//Q.12 NUMBER RANGE

let any_num = 56;
if (any_num >= 10 && any_num <= 100) {
    console.log("number is between the 10 and the 100");

}

//              SECTION -3 if ,else-if, nestede condition

//Q.13 NESTED GRADED

let stu_perce = 90;
if (stu_perce > 100 || stu_perce < 0) {
    console.log("invalid percentage");

}
else if (stu_perce >= 90 && stu_perce <= 100) {
    console.log("Grade A");

}
else if (stu_perce >= 80 && stu_perce < 90) {
    console.log("Grade B");

} else if (stu_perce >= 70 && stu_perce < 80) {
    console.log("Grade C");

} else if (stu_perce >= 60 && stu_perce < 70) {
    console.log("Grade D");

} else if (stu_perce >= 40 && stu_perce < 60) {
    console.log("Grade E");

} else {
    console.log("fail");

}

//Q.14 Student Result

let mark1 = 87;
let mark2 = 60;
let mark3 = 70;
if (mark1 >= 40 && mark2 >= 40 && mark3 >= 40) {
    let avg = (mark1 + mark2 + mark3) / 3;
    console.log("avg is", avg);

    if (avg >= 75) {
        console.log("distinction");

    } else if (avg >= 60) {
        console.log("First division");

    } else if (avg >= 50) {
        console.log("second division");

    }
    else {
        console.log("pass");

    }

}
else {
    console.log("fail");

}

//Q.16 Simple login


let username = "admin";
let password = "12345"

if (username === "admin" && password === "12345") {
    console.log('login Successful');

}
else {
    console.log("Invalid username or password");

}


//    SECTION -4 SWITCH CASE

//Q.17 SIMPLE CALCULATOR



let operator = "+";
switch (operator) {
    case '+':
        console.log(`${num1} ${operator} ${num2} :`, num1 + num2);
        break;
    case '-':
        console.log(`${num1} ${operator} ${num2} :`, num1 - num2);
        break;
    case '*':
        console.log(`${num1} ${operator} ${num2} :`, num1 * num2);
        break;
    case '/':
        console.log(`${num1} ${operator} ${num2} :`, num1 / num2);
        break;
    default: console.log("operator not match!");
        break;
}

//Q.18 DAY OF THE WEEK

let day = 1;

switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
      case 3:
        console.log("WEDNESDAY");
        break;
          case 4:
        console.log("THURSDAY");
        break;
          case 5:
        console.log("FRIDAY");
        break;
          case 6:
        console.log("SATURDAY");
        break;
          case 7:
        console.log("SUNDAY");
        break;





    default: console.log("Invalid day!");
        break;
}
