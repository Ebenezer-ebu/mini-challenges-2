function isolateDuplicates(text) {
    let tempArr = text.split('');
    let letter = [];
    let string = ``;
    for(let i = 0; i < tempArr.length; i++) {
      if(tempArr[i] === tempArr[i+1]) {
        letter.push(tempArr[i]); 
        letter.push(tempArr[i+1])
      }
    }  
    return letter;
  }
  (isolateDuplicates('eeaiij'));

module.exports = isolateDuplicates;
