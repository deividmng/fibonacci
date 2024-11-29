function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
    return result;
  }
  
  function fibsRec(n) {
    console.log("This was printed recursively");
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const sequence = fibsRec(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
  }
  
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
  
  function merge(left, right) {
    const sortedArray = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArray.push(left.shift());
      } else {
        sortedArray.push(right.shift());
      }
    }
    return sortedArray.concat(left, right);
  }
  
  console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
  console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
  console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
  console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
/**
 * Generates the first n numbers of the Fibonacci sequence.
 * @param {number} n - The number of Fibonacci numbers to generate.
 * @returns {number[]} An array containing the first n Fibonacci numbers.
 */
function fibs(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error('Input must be a non-negative integer');
    }
    if (n === 0) return [];
    if (n === 1) return [0];

    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}

// Example usage:
try {
    console.log(fibs(5)); // Output: [0, 1, 1, 2, 3]
} catch (error) {
    console.error(error.message);
}  