**Flatten deeply nested array**

<img width="444" alt="image" src="https://github.com/moni97/jsProblems/assets/25766765/e8e8d367-941f-492e-ae38-8dd576c14168">

<img width="438" alt="image" src="https://github.com/moni97/jsProblems/assets/25766765/eee4af2d-5606-4783-a626-6fd2e38e11ec">

Notes:
Flattening array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
1.	Creates a new array with all the sub array by recursively concatenating it upto specified depth
2.	Remote empty slots in an array
Arr = [1, 2, , 4, [2,5]]
Arr.flat() => [1, 2, 4, 2, 5]

3. It is a copying method, it doesn’t alter the array but returns a shallow copy of the array.
4. In this solution, another function called flattened is created to pass the result array and call it recursively.

