function getMissinNumber(item) {
  const n = item.length;
    const count = item[n - 1] - item[0] + 1 - n;
    return count;
  }
  const list = [-1,3];
  console.log(getMissinNumber(list));


  // 

  function getAllMissingNumbers(item) {
    let first = 0;
    let second = 1;
    let currentValue = item[0];
    const container = [];
    while (first < second && item[second]) {
      debugger;
      if ((item[first] + 1) !== item[second]) {
        if ((currentValue + 1) === item[second]) {
          first = second;
          second++;
          currentValue = item[first];
        } else {
          container.push(++currentValue);
        }
      }
      if ((item[first] + 1) === item[second]) {
        first = second;
        second++;
        currentValue = item[first];
      }
    }
    return container;
  }
  console.log(getAllMissingNumbers([-2,1,2,8,9,10,14]));