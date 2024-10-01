//Dates

let myDate = new Date()
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());


let myCreatedDate = new Date(2024,2,23,5,4,2);
// console.log(myCreatedDate.toLocaleString());



let myCreatedDate1 = new Date("01-03-2023");
//console.log(myCreatedDate1.toLocaleString());


let MyTimeStamp = Date.now()
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('defalut',{
      weekday: "long" 
})  