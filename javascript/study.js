// const age = prompt("please enter your age")
// const healthy = confirm("are you healthy?")
// console.log(age, healthy)

// if (age>=18 && healthy == true) {
//     console.log("Ehliyet alabilir")
// } else {
//     console.log("ehliyet alamaz")
// }

// const n1 = +prompt ("number1")
// const n2 = +prompt ("number2")
// const n3 = +prompt ("number3")
// switch (0) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// const sayi1 = Number + prompt("birinci sayiyi giriniz");
// const islem = prompt("yapacaginiz islemi giriniz +,-,*,/");
// const sayi2 = Number + prompt("ikinci sayiyi giriniz");

// let sonuc;
// switch (islem) {
//     case "+" :
//      sonuc = sayi1 + sayi2
//      break
//     case "-" :
//      sonuc = sayi1 - sayi2
//      break
//     case "*" :
//     sonuc = sayi1 * sayi2
//      break
//     case "/" :
//     sonuc = sayi1 / sayi2
//      break
//     default :
//     alert ("yanlis islem girisi") 
//     break
// }
// console.log(`${sayi1} ${islem} ${sayi2} = ${sonuc}`) ;

///////////////////////////////////////////////////////////
// const number1= Number(prompt("enter first number"))
// const proccess = prompt("enter a processing ; *,-,+,/ ")
// const number2= Number(prompt("enter second number"))


// if (proccess === "*") {
//     console.log(number1 * number2);
//   } else if (proccess === "+") {
//     console.log(number1 + number2);
//   } else if (proccess === "-") {
//     console.log(number1 - number2);
//   }else if(proccess==="/"){
//       console.log(number1/number2);
      
//   }else{
//       console.log("enter correct procces");
//   }
  
// ///////////////////////////////////////////
// let grade = Number(prompt("your grade"))

// while(grade < 0 || grade >100 ){
//   console.log("grade should be 0-100");
//   grade=Number(prompt("your grade:"))

// }
// console.log("Your Grade :", grade);


// ////////////////////////////////////////////
// let again= " ";
// do {
// let avg = 0
// const midterm = Number(prompt("your midterm grade:"))
// const final = Number(prompt("your final grade:"))
// avg = midterm * 0.4 + final * 0.6
// console.log(`Your score is ${avg}`);
// again = prompt("Do you want to continue(e/E)")
// }
//  while (again === "e" || again === "E")
// console.log("See you later, bye.");

/////////////FUNCTİON///////////////////////

// function printHello(){
//     console.log("hello");
// }
// printHello()
// printHello()

// function greet(firstName, lastName=""){
//     console.log(`hi, ${firstName} ${lastName}`);

// }
// greet("sabata", "talha")
// greet("sercan", "yilmaz")
// greet("sam", "richard")
// greet("ahmet")
// // const name=prompt("Your name:")
// // const surname=prompt("Your surname:")
// // greet(name, surname)
// ///////////////////////
// function calculate(name, yob){
//     const age= new Date().getFullYear()-yob
//     return`${name}'s age is ${age}`;
// }



// const talha =calculate("talha", 1997)
// console.log(talha);
// console.log(calculate("sena", 1991));
///////////////////////

const printHello = function(){
    console.log("hello");
}
printHello()
printHello()
//  örnek///////
let oddorEven = function(num){
    return num %2 ===0 ? "even" : "odd"
}
console.log(oddorEven(5));
console.log(oddorEven(6));
console.log(oddorEven(7));

/////örnek////
const findBiggest= function(n1,n2,n3){
    let biggest=n1;
    if(n2 >= biggest){
        biggest = n2
    }
    if (n3 >= biggest){
        biggest=n3
    }
    return biggest
}
console.log(`The Biggest:${findBiggest(-2,-3,-4)}`)
console.log(`The Biggest:${findBiggest(2,-19,130)}`)
console.log(`The Biggest:${findBiggest(10,999,99)}`)
console.log(`The Biggest:${findBiggest(5,6)}`)
////////////örnek////////
const add = function (n1, n2){
    return n1+n2
}
const sub = function (n1, n2){
    return n1-n2
}
const div = function (n1, n2){
    return n1/n2
}
const mul = function (n1, n2){
    return n1*n2
}
const compute = function(n1,n2,op){
let result=0;
switch (op) {
    case "+":
        result=add(n1,n2)
        break;
    case "-":
        result=sub(n1,n2)
        break;
    case "/":
        result=div(n1,n2)
        break;
     case "*":
        result=mul(n1,n2)
        break;
    default:
        break;
}
return result
}
console.log(compute(4,3,"/"));
console.log(compute(2,4,"*"));
console.log(compute(3,1,"+"));