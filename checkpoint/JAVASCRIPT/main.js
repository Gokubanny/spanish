function sumOfDistinctElements(set1, set2) {
    let sum = 0;
  
    // Add elements in set1 that are NOT in set2
    for (let i = 0; i < set1.length; i++) {
      if (!set2.includes(set1[i])) {
        sum += set1[i];
      }
    }
  
    // Add elements in set2 that are NOT in set1
    for (let i = 0; i < set2.length; i++) {
      if (!set1.includes(set2[i])) {
        sum += set2[i];
      }
    }
  
    return sum;
  }
  
  // Example usage
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  console.log(sumOfDistinctElements(set1, set2)); // Output: 13
  