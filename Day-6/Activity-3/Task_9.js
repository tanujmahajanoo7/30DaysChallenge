const arr=[1,2,3,4,5];

const sumNo=arr.reduce(x=>x+=x);

console.log(arr);
console.log(sumNo);


const total = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    });

console.log(total);