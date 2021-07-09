function getAllMissingNumbers(item) {
  let first = 0;
  let second = 1;
  let currentValue = item[0];
  const container = [];
  while (first < second && item[second]) {
    if ((item[first] + 1) !== item[second]) {
      if ((currentValue + 1) === item[second]) {
        first = second;
        second++;
        currentValue = item[first];
      } else {
        container.push(++currentValue);
      }
    } else {
      first = second;
      second++;
      currentValue = item[first];
    }
  }
  return container;
}
console.log(getAllMissingNumbers([-2,1,2,8,9,10,14]));