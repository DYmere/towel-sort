
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (arguments.length == 0) return [];

  var result=[];

  for (var i=0; i < matrix.length; i++ ) {
    if (i % 2 == 0) {
      matrix[i].forEach(element => result.push(element))
    }
    else {
      matrix[i].reverse().forEach(element => result.push(element))
    }
  }
  return result;
}
