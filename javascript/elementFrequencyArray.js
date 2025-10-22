let array = [2,3,3,4,4,4,4,90,90,51]

let counter = {};

for(let i=0 ; i<array.length ; i++)
    {
      let num = array[i]
      counter[num] = (counter[num] || 0 ) +1
    }

console.log(counter)