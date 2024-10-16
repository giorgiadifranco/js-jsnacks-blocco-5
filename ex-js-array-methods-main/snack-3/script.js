const numbers = [2, 8, 4, 7, 2, 87];

const newArrnumbers = numbers.map(number => number+1)

console.log(newArrnumbers);

const new_arrnumbers = []

for (let i = 0; i < numbers.length; i++){

    let number = numbers[i];

    number+=1

    new_arrnumbers.push(number)
}
console.log(new_arrnumbers);




// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]