// Added the many kinds of number by using the arguments
function addNumbers(num1, num2){
    // console.log(arguments[1])
    let result = 0;
    for(const num of arguments){
        result = result + num;
    }
    return result;
}

const sum = addNumbers(12, 98, 20, 98, 88, 45, 90)
// console.log(sum);

function addName(firstName, lastName){
    let name = '';
    for(const part of arguments){
        name = name + part +  ' ';
    }
    return name;
}

const personName = addName('Hanif', 'songket', 'Manna', 'Shakib', 'Bin', 'Rifath');
console.log(personName);