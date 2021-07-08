function getAllMissingNumbers(item) {
    let first = 0;
    let second = 1;
    let currentValue;
    const container = [];
    while (first < second && item[second]) {
      if ((item[first] + 1) !== item[second]) {
        if ((currentValue + 1) === item[second]) {
          first = second;
          second++;
          currentValue = 0;
        } else {
          currentValue = (currentValue || item[first]);
          container.push(currentValue = currentValue + 1);
        }
      }
      if ((item[first] + 1) === item[second]) {
        first = second;
        second++;
        currentValue = 0;
      }
    }
    return container;
  }
  console.log(getAllMissingNumbers([-15,-9,-8,-1]));