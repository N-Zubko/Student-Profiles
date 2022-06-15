export function countAverage(gradesArray) {
  const reducer = (accumulator, grade) =>
    parseInt(accumulator) + parseInt(grade);
  const sum = gradesArray.reduce(reducer);
  const average = sum / gradesArray.length;
  return average;
}
