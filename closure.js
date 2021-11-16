function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clook1 = stopWatch();
console.log(clook1());
console.log(clook1());

const clook2 = stopWatch();
console.log(clook2());
console.log(clook2());
console.log(clook2());