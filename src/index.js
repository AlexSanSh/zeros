module.exports = function getZerosCount(number) {
  let count = 0;
  for (let i = number; i >=5; i--) {
          for (let j = i; j>=5; j=j/5) {
            if (j%5===0) count++ ;
            else break;
          }
    }
  return count;
}


