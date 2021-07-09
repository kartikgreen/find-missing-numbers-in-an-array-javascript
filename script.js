function getMissingNumbersCount(item) {
  const n = item.length;
    const count = item[n - 1] - item[0] + 1 - n;
    return count;
  }
  const list = [-1,3];
  console.log(getMissingNumbersCount(list));