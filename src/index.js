module.exports = function getZerosCount(number) {
  let count = 0;
  function isDevide(n){
    if(n%5===0) {
      count++;
      isDevide(n/5);
    }
  }
  for (var i = number; i >=1; i--) {
    isDevide(i);
  }
  return count;
}

