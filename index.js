// add solution here
function theBeatlesPlay(musicians, instruments){
  var beatlesInstruments=[]
    for(let i=0; i<musicians.length; i++){
      beatlesInstruments.push(musicians[i] + " plays " + instruments[i])
    }
  return beatlesInstruments
}

function johnLennonFacts(johnFacts){
    var facts =[]
    let i=0
    while(i<johnFacts.length){
      johnFacts.push(johnFacts[i]+"!")
      i++
    }
    return facts
}