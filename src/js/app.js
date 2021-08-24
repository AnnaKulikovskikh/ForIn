// TODO: write your code here
export default function orderByProps(obj, sortOrder) {
  const arr1 = [];
  for (const i in obj) {
    arr1.push(i);
  }
  for (const i of sortOrder) {
    arr1.splice(arr1.indexOf(i), 1);
  }
  arr1.sort();
  const arr2 = sortOrder.concat(arr1);
  const arr3 = [];
  for (const i of arr2) {
    arr3.push({ key: i, value: obj[i] });
  }
  return arr3;
}
