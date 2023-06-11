let regex = /\bA\w+\b/g
let testingString = 'AmanA IAS Good. AA A10, in laaala';
console.log(regex.exec(testingString));
console.log(regex.test(testingString));
console.log(testingString.match(regex));
console.log(testingString.matchAll(regex));
regex = /\b[A-Z]\d+,/
console.log(testingString.search(regex));