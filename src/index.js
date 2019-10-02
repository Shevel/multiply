module.exports = function multiply(first, second) {
  var reversea = first.split('').reverse();
  var reverseb = second.split('').reverse();

  var result = [];

  for (var i = 0; i < reversea.length; i++) {
    for (var j = 0; j < reverseb.length; j++) {
      var m = reversea[i] * reverseb[j];
      result[i + j] = (result[i + j]) ? result[i + j] + m : m;
    }
  }

  for (var i = 0; i < result.length; i++) {
    var modulo = result[i] % 10;
    var ten = Math.floor(result[i] / 10);
    result[i] = modulo;
    
    if (!result[i + 1] && ten == 0)
      break;
    if (result[i + 1] && ten)
      result[i + 1] += ten;
    else if (ten)
      result[i + 1] = ten;   
  }
 return result.reverse().join('');
}
