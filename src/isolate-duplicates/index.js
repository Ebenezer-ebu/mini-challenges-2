function isolateDuplicates(text) {
  let letters = text.split("");
  let dupilcates = "";
  let obj = {};
  let count = 0;
  letters.forEach(function(letter) {
    obj[letter] ? obj[letter]++ : obj[letter] = 1;
  })
  for(let char in obj) {
    let strCnt = obj[char];
    if(strCnt > 2) {
      dupilcates += char.repeat(2);
      strCnt -= 2;
      count++;
    } else {
      dupilcates += char.repeat(strCnt);
      strCnt -= strCnt
    }
    if(strCnt > 0) {
      dupilcates += "["+ char.repeat(strCnt) +"]"; 
    }
  }
  return [dupilcates, count];
}

module.exports = isolateDuplicates;
