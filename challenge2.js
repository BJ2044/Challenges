//Write a function to convert USD to Japense Yen. Output: "$45 is 578 Yen"
// 1USD === 145.29 Yen

let USD = 100
function currencyConvert(USD) {
    return(USD * 145.29)
}

const Yen = currencyConvert(USD)

console.log(`$${USD} is ${Yen.toFixed(0)}¥`);


