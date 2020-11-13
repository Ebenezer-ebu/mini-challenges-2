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
      let array2 = val[i+1];
      array1 = array1.filter(function(item) {
      return !array2.includes(item);
      });
      
      let keyItem = Object.keys(newObj);
      newObj[keyItem[i]] = array1;  
    }
    return newObj;
  }
  
  console.log(removeDuplicates({
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
    "3": ["F", "B", "C", "C", "G"]
  }));

module.exports = removeDuplicates;
