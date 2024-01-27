
//callback function - function that is passed as argument
//higher order function - function who takes funciton as an argument

const add = (a, b) => {
    return (a + b);
}

const subs = (a, b ) => {
    return Math.abs(a - b);
}

const mult = (a, b) => {
    return Math.abs( a * b);
}

//problem 
// console.log(add(4,5));
// console.log(subs(4,5));
// console.log(mult(4,5));

//solution
const calculator = (a, b,func) => {
    return func(a, b);
}
console.log(calculator(4,5, add));
console.log(calculator(4,5, subs));
console.log(calculator(4,5, mult));