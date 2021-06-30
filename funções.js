function soma(a,b){
    return a + b
}

function sub(a,b){
    return a - b
}

function mult(a,b){
    return a * b
}

function div(a,b){
    if (b==0){
        return "incalculavel"
    }
    return a / b
}


console.log(soma(4,8))
console.log(sub(2,5))
console.log(mult(2,3))
console.log(div(9,0))
console.log(div(9,3))


