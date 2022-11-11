
// let numb1 = 12;
// if(numb1 > 13) {
//     document.write("Great than 13");
// }else {
//     document.write("less than 13");
// }

// Using a function
// function isNumber(onlyNumber) {
//     if(Number.isFinite(onlyNumber)) {
//         document.write(`${onlyNumber} is a number`);
//     }else {
//         document.write(`${onlyNumber} is not a number`);
//     }
// }

// Calling a function
// let myNumber = 7.6;
// isNumber(myNumber);

// CHALLENGE

// let numb1 = "2";
// if(numb1 > 19) {
//     document.write("older than");
// }else {
//     document.write("younger than")
// }
// let numb2 = 25;
// if(numb2 > 26) {
//     document.write("older than");
// }else {
//     document.write("");
// }

// function addition(numb1, numb2) {
//     console.log(numb1 + numb2);
// }

// addition(8, 2);
// addition(11, 8);

// function addition(numb1, numb2) {
//     if((Number.is isFinite(numb1)) &&
//     (Number.isFinite(numb2)) ) {
//         console.log(numb1 + numb2);
//     }else {
//         console.log(`${numb1} / ${numb2} is not a number`)
//     }
// }
// nested if if statement
// let age = 18;
// let salary = 5000;
// if(age > 17) {
//     if(salary >= 5000) {
//         document.write("ou are qualified");
//     }else {
//         document.write("Present your second payslip");
//     }
// }else {
//     document.write("You are not qualified");
// }

// nested - using logical operator
// if((age > 17) && (salary >= 5000)) {
//     document.write("You are qualified");
// }else {
//     document.write("You are not qualified");
// }

// switch statements
// let mark = 50;
// switch(marks) {
//     case 100:
//     case 95:
//         document.write("Grade A");
//     break;
//     case 91:
//     case 90:
//     case 87:
//         document.write("Grade B");
//     break;
//     case 50:
//         document.write("Passed");
//     break;
//     case 49:
//         document.write("Failed");
//     break;
//     default:
//         document.write("Not found");
// }

// let mark = 49;
// switch(mark) {
//     case 100:
//     case 91:
//         document.write("You're awesome");
//     break;
//     case 90:
//     case 70:
//         document.write("Distinction");
//     break;
//     case 69:
//     case 50:
//         document.write("Passed");
//     break;
//     case 49:
//         document.write("Failed");
// }

// challenge _
// let marks = 71;
// switch(true) {
//     case marks <= 49:
//         console.log("You failed");
//     break;
//     case (marks >= 50) && (marks <= 69):
//         console.log("Passed");
//     break;
//     case (marks >= 70) && (marks <= 90):
//         console.log("Distinction");
//     break;
//     case (marks >= 91) && (marks <= 100):
//         console.log("You're awesome");
//     break;
// }

/*
Different loop in JS:
- for
- for in: Loop through object's properties
- for of: Loop through the values 
- while
- do while
*/
// for(let i = 0; i<10; i+=2) {
// //     if((i % 2) == 0) {
// //         console.log(i);
// //     }
//     console.log(i);
//     // if(i == 5) break;
//     if(i == 4) continue;
// }
// Break and continue

// for in
lrt person = {
    name: 'David',
    surname: 'john',
    subject: ['HTML 5', 'CSS3']
    address: {
        streetName: 'pretoria rd',
        country: 'South Africa',
        complexName: 'PTA'
    }
}