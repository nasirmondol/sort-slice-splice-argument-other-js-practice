const products = [
    'hp high amount laptop feel',
    'dell 57core Laptop feel',
    'dell asus high performance laptop',
    'Dell i5 1TB laptop storage Phone ', 
    'samsung 200GB black camera Laptop feel'
];
const searching = 'feel';

// indexOf
const outPut = [];
for (const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        // outPut.push(product)
    }
}
// console.log(outPut)

// includes
for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        // outPut.push(product)
    }
}
// console.log(outPut)

// startsWith
for(const product of products){
    if(product.toLowerCase().startsWith(searching)){
        // outPut.push(product)
    }
}
// console.log(outPut)

for(const product of products){
    if(product.toLowerCase().endsWith(searching)){
        outPut.push(product)
    }
}
console.log(outPut)