//given array ["apple", "banana", "grapes", "apple", "orange", "orange", "banana", "apple"]; expected output { apple: 3, banana: 2, grapes: 1, orange: 2 }


let fruits = ["apple", "banana", "grapes", "apple", "orange", "orange", "banana", "apple"];

 

function frutcount(fruites){
    let count={};
    
    fruites.forEach(fruties=>
   { if(count.hasOwnProperty(fruties))
       {
           count[fruties]++;
       }
       else
       {
           count[fruties]=1;
       }
   }
    
        )
        
    return count;
}

let fcount=frutcount(fruits);
console.log(fcount)