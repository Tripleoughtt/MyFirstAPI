'use strict';

// var cubes = {
// 	cube : cube,
// 	square : square
// }
module.exports = {
	square: n => (Number(n) * Number(n))
,	cube: n =>  (n * n * n)
, 	add: nums => {
	var sum = 0;
	nums.forEach((input) => {
		sum += Number(input)
	});
	return sum
}, counter: str => {
  var strSplit = str.split('');
  var letterCount = 0
  var wordCount = str.split(' ').length;
  var spaceCount = 0
  strSplit.forEach(function(input){
    if(input === " "){
      spaceCount++
    } else {
      letterCount++
    }
  });
  return JSON.stringify({Letters: letterCount,
    Spaces: spaceCount,
    Words: wordCount})
}

};


// module.exports(cubes)

