let bonus = 20;

function sum (first, second){
    let result = first + second + bonus;
   
    if (result > 9){
        var mood = "happy";
        mood = "fishy";
        mood = "cranky";
    }
    console.log(mood);
    return result;
}

const output = sum(3, 7);
console.log(output);