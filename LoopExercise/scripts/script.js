console.log("For loop counting to 10:");
for(let i = 1; i < 11; i++){
    console.log(i);
}

console.log("For loop counting down from 10:");
for(let i = 10; i > 0; i--){
    console.log(i);
}

console.log("For loop counting down from 10 using while loop:");
{let i = 10;
while(i > 0){
    console.log(i);
    i--;
}
}

console.log("For loop counting to 10 using while loop:");
{let i = 0;
while(i < 11){
    console.log(i);
    i++;
}
}

console.log("For loop counting to 10 using do/while loop:");
{let i = 0;
do{
    console.log(i);
    i++;
} while(i < 11);
}

console.log("For loop counting down from 10 using do/while loop:");
{
let i = 10;
do{
    console.log(i);
    i--;
} while(i > 0);
}

console.log("counting each number in an array:")
const array = [1,2,3,4,5,6,7,8,9,10];
for(let number of array){
    console.log(number);
}


console.log("Adding padding to a word");
let string1 = prompt("Enter a word!");
let string2 = " ";
while(string1.length < 10){
    string1 = string2 + string1
}
console.log(string1);
