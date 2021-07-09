/**
 * 
 * @param {*} item Takes only the sorted array
 */
function getAllMissingNumbers(item) {
  let first = 0;
  let second = 1;
  let currentValue = item[0];
  const container = [];
  while (first < second && item[second]) {
    if ((item[first] + 1) !== item[second]) { // Not in sequence so adds the missing numbers in an array
      if ((currentValue + 1) === item[second]) { // Moves the first & second pointer
        first = second;
        second++;
        currentValue = item[first];
      } else { // Adds the missing number between two number
        container.push(++currentValue);
      }
    } else { // Numbers are in sequence so just moves the first & second pointer
      first = second;
      second++;
      currentValue = item[first];
    }
  }
  return container;
}
const item = [-1, -5, 2, 3, 5];
item.sort( (a, b) => a - b );
console.log(getAllMissingNumbers(item));