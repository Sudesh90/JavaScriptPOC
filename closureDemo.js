// Lexical scoping - Closure - 1
// const outFunc = (a) => {
//     let b = 10;
//     const innerFunc = () => {

//         let sum = (a + b);
//         console.log("sum " + sum);
//     }
//     innerFunc();
// }

// outFunc(5);//15

// // Lexical scoping - Closure - 2
// const outFunc = (a) => {
//     let b = 10;
//     const innerFunc = (c) => {

//         let sum = (a + b + c);
//         console.log("sum " + sum);
//     }
//     innerFunc(15);
// }

// outFunc(5);//30

// Lexical scoping - Closure - 3
const outFunc = (a) => {
    let b = 10;
    const innerFunc = () => {

        let sum = (a + b );
        console.log("sum " + sum);
    }
        return innerFunc;
}

const inner = outFunc(5);
inner();
