
export function prepareTilesColors(tilesQty){
  //Create name of classes for colors
  const generateColors = function(){
    let colorsData = [];
    for (let i=1; i<=tilesQty; i++){
      let counter = i < (tilesQty/2+1) ? i : i-tilesQty/2
      colorsData.push('color'+ counter);
    }
    return colorsData;
  }
  //Generate Array of random indexes
  const generateRandIndexes = function(){
    let indexes = [];
    while(indexes.length<tilesQty){
      const randNumber = Math.floor(Math.random()*tilesQty);
      if(indexes.indexOf(randNumber)>-1) continue;
      indexes.push(randNumber);
    }
    return indexes;
  }

  //Build the final array of random colors.
  function generateRandColors(ind, col){
  	let newColors = [];
  	for(let i=0; i<colors.length; i++){
  		newColors.push(col[ind[i]]);
  	}
  	return newColors;
  }
  //Activate this stuff.
  const colors = generateColors();
  const indexes = generateRandIndexes();
  const readyColors = generateRandColors(indexes, colors);
  //console.log(readyColors);
  return readyColors;
}
