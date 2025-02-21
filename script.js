let numbers = [2, 4, 9, 10, 45, 67, 8, 90];  
let evenNumbers = [];  

for (let num of numbers) {  
    if (num % 2 === 0) {  
        evenNumbers.push(num);  
    }  
}  

console.log(evenNumbers);
