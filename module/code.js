module.exports.RemoveDuplicate = function RemoveDuplicate(arr) {
    let array = JSON.parse(arr);
    let result = [];
    array.forEach(element => {
    let answer = [];
      for (let str of element) {
          if (!answer.includes(str)) {
             answer.push(str);
          }  
      }
  result.push(answer.join(''));
  });
  return JSON.stringify(result);
}
    
module.exports.SortMass = function SortMass(arr) {
    let array = JSON.parse(arr);
    let odds = array.filter(x => x%2).sort((a, b) => a - b);
    let b = array.map(x => x%2 ? odds.shift() : x);
  return  b.toString()
}
