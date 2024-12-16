/*let num1 = 1;
console.log(typeof num1);

let num2 = "1";
console.log(typeof num2);

console.log(num1 == num2);
console.log(num1 === num2);

console.log(num1 != num2);
console.log(num1 !== num2);

let hoy = new Date();
console.log(hoy);
console.log("Hoy es: " + hoy);

console.log(hoy.getTime());


const SALARY = 1000;
console.log(SALARY);

let person = {name: 'Jon',
                age: 30
            };
console.log(person);
console.log(person.name);
console.log(person.age);

person.name = 'Jane';
person.children = 3;
console.log(person.name);

console.log(person.children); */

/* let name = "Alberto";
let ciudad = "Málaga";
let str = `Hi! my name is ${name} and I live in ${ciudad}`;
let str2 = "Hi my name is " + name + " and I live in " + ciudad;
console.log(str2);

let age = 4;
console.log(str);

let strLit = `Hi ${name}
in
${ciudad}`;

let sum1 = (a, b) => {
    return a+b;
};

let sum2 = (a, b) => a+b; 

console.log(sum2(2,3)); */

let num1 = Number(prompt("Introduce un número: "));
let num2 = Number(prompt("Introduce otro número: "));


let answer = `Operation: 
${num1} 
+ 
${num2} 
--------
${num1 + num2} 
`;

alert(answer);

document.getElementById("P1").innerText = answer;

let element = document.createElement('p');

let textNode = document.createTextNode(answer);

element.appendChild(textNode);

document.getElementById("answers").appendChild(element);

document.getElementById("answers").innerHTML += "<p>Hola</p>"

