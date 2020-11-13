function removeDuplicates(obj) {
  let myObj = obj;
  let unique;
  let keys = Object.keys(myObj);
  console.log(keys)
  let values = Object.values(myObj);
  let pos;
  let newObj = new Map();
  for(let i = 0; i < keys.length; i++) {
     pos = keys[i];
     unique = [...new Set(myObj[pos])];
     newObj.set(pos,unique);
     console.log(newObj.entries);
  }
  console.log(newObj.entries);
  let newKeys = Object.keys(newObj);
  console.log(newKeys);
  let newValues = Object.values(newObj);
  console.log(newValues);
  newKeys.sort(((a, b) => a - b));
  for(let j = 0; j < newValues.length; j++) {
    let srt = newValues[j];
    
  }

}

console.log(removeDuplicates({
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"]
}));

module.exports = removeDuplicates;
