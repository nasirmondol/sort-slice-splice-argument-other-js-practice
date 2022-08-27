const anthem = 'Amar Sonar Bangla Ami Tumay Valobashi';
// split = string ke vag lore alada kore dey.
const words = anthem.split(' ') 
// console.log(words)
const withoutA = anthem.toLowerCase().split('a')
// console.log(withoutA)

// slice = slice string er ekta small parts niiye tar small parts k return kore dey.

const smallWords = anthem.slice(11, 27);
// console.log(smallWords);

// subStr
// const anotherParts = anthem.substr()

// concate = string k jora dewa

const first = 'Dhaka';
const second = 'city';
const fullName = first.concat(' ','city').concat(' ' + 'Tangail');
// console.log(fullName)

// join = add to many strings
const names = ['Abul', 'hasan', 'Rahim', 'Badal', 'Harris']
const addName = names.join('Md ');
console.log(addName)

