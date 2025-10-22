let nestedArray = [2,3,[3,1,[3,4,5]],6,9,8]


function nestedArraySum(array){
    let sum = 0;

    for(let i = 0 ; i< array.length ; i++) 
        {
            let element = array[i]
            if( typeof element === "object" )
            {
               sum += nestedArraySum(element)
            }
                else
            {
                sum += element
            }
        }

  return sum
}


console.log(nestedArraySum(nestedArray))