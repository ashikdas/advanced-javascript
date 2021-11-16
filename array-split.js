const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const part = nums.slice(2, 5);
const remove = nums.splice(2, 3, 22, 33, 44, 55);

// console.log(remove);
// console.log(nums);

const together = nums.join(", ");
console.log(together);
