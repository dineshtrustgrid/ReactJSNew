// optional chaining
const user = {
    userName : "Vinod",
    age : 33,
    address:{
        place:"Anatanpur",
        street: "vinod street",
        city :"andhra",
        pinCode :null
    }

}

// if we try to read null, undefined in javascrip we will get an error.
//console.log("user Age ",user.age);
//console.log("user",user.address.roadNumber); // o/p : undefined
//console.log("user",user.address.roadNumber.houseNumber); // o/p : cant read properties of undefined
//console.log("user",user.address.pinCode); o/p null
//console.log(user.address.pinCode.houseName); // o/p : cant read properties of undefined
// const firstName ="brendan";
// const middleName =null;
// const lastName = "eich";

// console.log(`fullname ${firstName} middle name ${middleName} lastName ${lastName} `);

//console.log("optional chaining undefined",user.address.roadNumber?.houseNumber);

//if roadnumber doesnt exist then it will not move forward and it stop ,and result will be undefined. 


//console.log("optional chaining null ",user.address.pinCode?.houseCode);

// if pincode doent exist then it will not move forward and it stop , and result will be undefined.

const numbers =[20,10,30,40];

const firstNumber = numbers?.[0];
const checkingNumber = numbers?.[4];
console.log("checkingnumber",checkingNumber); 
const fifthNumber = numbers?.[4];

console.log("firstNumber",firstNumber);
console.log("fifthNumber",fifthNumber);

let number =[null];
const firstnumber = number?.[0];
console.log(firstnumber);