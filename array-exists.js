function megaFriend(friends){
    // if(Array.isArray(friends) == false){
    //     return 'Please provide an valid array!!'
    // }
    let mega = friends[0]
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['shamol', 'Robinnnn', 'Shorifullah', 'Jamil', 'ka,al', 'Rasel', 'Hasib'];
const bigName = megaFriend(friends)
// console.log(bigName);

// indexOf
if(friends.indexOf('shamol') != -1){
    // console.log('shamol exists')
}

// includes
if(friends.includes('Hasiba')  ){
    // console.log('Hasib is exists')
}
else{
    // console.log("hasiba doesn't exists")
}

// concat
const first = [1, 2, 3, 3]
const second = [4, 5, 6, 7]
const concat = first.concat(second)
console.log(concat)