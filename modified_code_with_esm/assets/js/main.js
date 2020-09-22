function addNumbers(numbers) {
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum = sum+numbers[i];
    }
    return sum;
}

function multiplyNumbers(numbers) {
    let result = 1;
    for(let i=0; i<numbers.length; i++){
        result = result*numbers[i];
    }
    return result;
}

function reverseString(data){
    const reversedString = data.split('').reverse().join('');
    return reversedString;
}



function addNumbersClickEventHandler(){
    const data = [1,2,3,4,5];
    console.log(addNumbers(data));
}

function multiplyNumbersClickEventHandler(){
    const data = [1,2,3,4,5];
    console.log(multiplyNumbers(data));
}

function reverseStringClickEventHandler(){
    const data = "Hello World";
    console.log(reverseString(data));
}
