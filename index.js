// add solution here
function theBeatlesPlay(musicians, instruments) {
  var musiciansPlayInstruments = [];
  for (let num = 0; num < musicians.length; num++) {
   musiciansPlayInstruments.push(musicians[num] + " plays " + instruments[num]); 
  }
  return musiciansPlayInstruments;
}