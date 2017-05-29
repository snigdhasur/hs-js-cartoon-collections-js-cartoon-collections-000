function dwarfRollCall(array) {
  var string = "";
  for(let i=0; i < array.length; i++) {
  string += `${i+1}. ${array[i]} `;
}
 return string
}

function summonCaptainPlanet(array){
  var arrayModified = [];
  for(let i=0; i < array.length ; i++) {
  arrayModified.push(`${array[i].toUpperCase()}!`);
}
 return arrayModified
}

function longPlaneteerCalls(array) {
  for(let i=0; i < array.length ; i++) {
    if (array[i].length < 5) {
      return false
    }
    else {
      return true
    }
  }
}

function findTheCheese (array) {
  for(let i=0; i < array.length ; i++) {
    if (array[i] === 'camembert' || array[i] === 'gouda' || array[i] === 'cheddar') {
      return array[i]
    }
    }
}
