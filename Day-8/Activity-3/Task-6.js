function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));


function sumTwo(...args)
{
    let sum=0;
    for(const arg of args) 
    {
        sum+=arg;
    }
    return sum;
}
console.log(sumTwo(1,2,3,4));