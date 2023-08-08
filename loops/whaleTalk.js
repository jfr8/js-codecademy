const input = 'turpentine and turtles'

const vowels = ['a','e','i','o','u']

const resultArray = []

for (let i = 0; i < input.length; i++) {
  //console.log(input[i], i)
  for (let j = 0; j < vowels.length; j++) {
    //console.log(vowels[j], j)
    if (input[i] === 'e') {
      //console.log(input[i], vowels[j])
      resultArray.push(input[i], vowels[j])
    }
    if (input[i] === 'u') {
      resultArray.push(input[i], vowels[j])
    }
  } 
  
}

console.log(resultArray)

let arrayJoin = resultArray.join('')
console.log(arrayJoin.toUpperCase())