const numbers = [8, 9, 5, 3, 7, 1 , 6, 2,  4, 0];
// const sortedNumber = numbers.sort();
// console.log(sortedNumber);
// sort = serial wise furnished the array
const friendList = ['Calam','Akram', 'Dipjol', 'Faruk', 'Babul', 'Emon', 'zaman', 'yoxy'];
// const friendListSorted = friendList.sort();
// console.log(friendListSorted);
// const sortedRevers = friendList.sort().reverse();
// console.log(sortedRevers);

// sort
const bigNumber = [55, 98, 100, 30, 65, 9, 6, 5, 35, 29, 44, 87, 90];
const sortedBigNumbers = bigNumber.sort(function(a, b){
    return a-b;
});
console.log(sortedBigNumbers);