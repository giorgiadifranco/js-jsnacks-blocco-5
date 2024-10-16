const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];
//metodo con map per stampare nuovo array di soli nomi
const newPeople = people.map((person) => {
  return person.name
}) 
console.log(newPeople);

//metodo forEach per stampare il singolo elemento

const new_people = people.forEach((person)=>{
 console.log(person.name)
})



//ciclo for per nuovo array al posto di map

const new_People =[]
for(let i = 0; i< people.length; i++){
    let person = people[i];

    new_People.push(person)

}
console.log(new_People);





// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'