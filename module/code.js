// module.exports.RemoveDuplicate = function RemoveDuplicate(digits){
//     let str = '';
//     for (let i=0;i< digits.length;i++){
//       for (let j=i+1;j<=digits.length;j++){
//         const word = digits.slice(i,j)
//         if(digit.includes(word)){
//           str += ' ' + word
//           i=j
//         }
//       }
//     }
//     return str.trim()
//   }
//   const digit = "zero nine one one eight two seven three six four two five".split(' ')
//   module.exports.RemoveDuplicate = function RemoveDuplicate(arr) {
//     let result = [];
  
//     for (let str of arr) {
//       if (!result.includes(str)) {
//         result.push(str);
//       }
//     }
  
//     return result;
//   }
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
    
//     module.exports.SortMass = function SortMass(arr){
//     const odd = arr.filter(i => i%2 !== 0).sort();
//     let i = 0,
//     result = [];
//     arr.forEach(e => {
//     if (e%2 === 0) {
//     result.push(e)
//   } else {
//     result.push(odd[i]);
//     i++;
//     }
//     });
//     return result;
//     }
module.exports.SortMass = function SortMass(arr){
    // for (let i=0; i=arr.Lenght;i++){
    //     for (let j=0; j=arr.Lenght;j++){
    //          if(arr[i]% 2 == 1 && arr[j]% 2 == 1 && arr[i] > arr[j]){
    //             var temp = arr[i];
    //             arr[i] = arr[j];
    //             arr[j] = temp;
    //          }
    //     }
    // }
    forEach
    result=arr;
    return result;
}