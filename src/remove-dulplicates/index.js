function removeDuplicates(obj) {
    Object.keys(obj).sort();
    let object;
    let newObj = {};
    for (let prop in obj) {
       newObj[prop] = [...new Set(obj[prop])];     
    }
    let val = Object.values(newObj);
    console.log(val)
    for(let i = 0; i < val.length - 1; i++) {
      let array1 = val[i];
      for(let j = i+1; j < val.length; j++) {
        let array2 = val[j];
        array1 = array1.filter(function(item) {
        return !array2.includes(item);
       });
      }
      let keyItem = Object.keys(newObj);
      newObj[keyItem[i]] = array1;  
    }
    return newObj;
  }
  
  console.log(removeDuplicates({
   "432": ["A", "A", "B", "D"],
    "53": ["L", "G", "B", "C"],
    "236": ["L", "A", "X", "G", "H", "X"],
    "11": ["P", "R", "S", "D"]
  }));

module.exports = removeDuplicates;
