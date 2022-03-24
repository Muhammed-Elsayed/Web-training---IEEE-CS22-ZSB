function specialMix(...data) {
  let sum1 = 0;
  for (i = 0; i < data.length; i++) {
    let the_integer_part = parseInt(data[i]);

    if (!isNaN(the_integer_part)) {
      sum1 += the_integer_part;
    }
  }
  if (sum1 == 0) {
    return "all is string";
  }

  return sum1;
}
// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
