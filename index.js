// add solution here
function theBeatlesPlay(musicians, instruments){
  var beatlesInstruments=[]
    for(let i=0; i<musicians.length; i++){
      beatlesInstruments.push(musicians[i] + " plays " + instruments[i])
    }
  return beatlesInstruments
}

function johnLennonFacts(array) {
  var loudFacts = [];
  let num = 0
  while (num < array.length) {
    loudFacts.push(array[num] + "!!!")
    num++
  }
  return loudFacts;
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  do {
  emptyArray.push("I love the Beatles!");
  number++;
      } 
  while (number < 15);
  return emptyArray;
}