// add solution here

function theBeatlesPlay(musicians, instruments) {
  var array = [];
for(var n = 0; n < musicians.length; n++) {
array.push(`${musicians[n]} plays ${instruments[n]}`);
}
return array;
}

function johnLennonFacts(array) {
  var n = ["He hated the sound of his own voice"]
  while (n < array.length) {
    array[n] = array[n] + "!!!";
    n++;
  }
  return array;}
  
function johnLennonFacts(array) {
var n = ["He hated the sound of his own voice", "He was never a vegetarian" ];
while (n < array.length) {
array[n] = array[n] + "!!!";
 n++;
}
return array;}