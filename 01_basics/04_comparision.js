// console.log("2">1);
// console.log("02">1);

console.log(null>0); //op=false
console.log(null == 0);// false
console.log(null>=0);//true
// console.log(typeof null);
//The reason is that equality check == snd comparision ><>=<= work diffrently. Comparision convert null to a number, trating it as 0. That's why (3) null>=0 is true and (1) null>0 is false.

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined<0);
//false as output when check undefined 


