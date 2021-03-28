function min (num1, num2) {
    return (num1 > num2) ? num2 : num1;
}

console.log(`The lowest number is: ${ min(1, 5) }`);


function pow (x, n) {
    let result = x;

    for(let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

//let x = prompt("x?", '');
//let n = prompt("n?", '');

// if (n < 1) {
//     alert(`Power ${n} is not supported, use a positive integer`);
// } else {
//     alert( pow(x, n) );
// }

