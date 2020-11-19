const aaa = 'fffffgghfffggggiii'
function isolateDuplicate(text) {
   let isDuplicate = false;
   let alphabetCount = 0;
   let duplicateCount = 0;
   let returnWord = `${text[0]}`;
   for (let i = 1; i < text.length; i++) {

      alphabetCount = (text[i] == text[i - 1]) ? alphabetCount + 1 : 0;
      if (alphabetCount > 1) isDuplicate = true;
      if (alphabetCount == 1) isDuplicate = false;
      if (alphabetCount == 2) duplicateCount++;

      if (alphabetCount == 2 && (i == text.length - 1)) {//An Edge Case
         returnWord += `[${text[i]}]`
         
      } else if (alphabetCount == 2) {
         returnWord += `[${text[i]}`
         
      } else if (alphabetCount == 0 && isDuplicate) {
         returnWord += `]${text[i]}`
      } else if ((i == text.length - 1) && isDuplicate) {//An Edge case
         returnWord += `${text[i]}]`
      } else {
         returnWord += `${text[i]}`
      }
   }
   return [returnWord, duplicateCount]
}
console.log(isolateDuplicate(aaa));

module.exports = isolateDuplicates;
