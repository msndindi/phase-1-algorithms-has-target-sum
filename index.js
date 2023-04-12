function hasTargetSum(array, target) {
  // Write your algorithm here
    const hashMap = {};

    for (let i = 0; i < array.length; i++) {
      const difference = target - array[i];

      if (hashMap[difference] !== undefined) {
        return true;
      }

      hashMap[array[i]] = i;
    }

    return false;
}

/* 
  Write the Big O time complexity of your function here

  Time Complexity: O(n)


*/

/* 
  Add your pseudocode here
  Define a function named hasTargetSum that accepts an array and a target sum as parameters.
Initialize a hashmap.
Loop through each element in the array, and for each element, do the following:
a. Compute the difference between the target sum and the current element.
b. If the difference is already in the hashmap, return true.
c. Otherwise, add the current element to the hashmap with its index as the value.
If the loop completes without finding a pair that sums to the target, return false.

*/

/*
  Add written explanation of your solution here
  The function hasTargetSum takes in an array and a target sum as arguments and returns a boolean indicating 
  whether there are any two elements in the array that sum up to the target.

The algorithm starts by initializing a hashmap. Then, it loops through each element in the array, and for each element,
 it computes the difference between the target sum and the current element. If the difference is already in the hashmap,
  it means that there is another element in the array that sums up to the target with the current element, so the function returns true.
   Otherwise, the current element is added to the hashmap with its index as the value, to be used later in case a matching element is found.

If the loop completes without finding a pair that sums up to the target, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;