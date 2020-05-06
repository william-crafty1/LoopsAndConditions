console.log("Heating and cooling exercise");
let actualTemp = 80;
let desiredTemp = prompt("What do you want the temperature to be?");

if(desiredTemp < actualTemp){
    console.log("Running AC...");
}
else if(desiredTemp > actualTemp){
    console.log("Running heat...")
}
else{
    console.log("standby");
}

console.log("Temperature conversion exercise");
const tempCelsius = parseInt(prompt("Enter a Celsius temperature!"));
const targetString = prompt("Enter a desired unit of temperature: 'C' for Celsius, 'F' for Fahrenheit, 'K' for Kelvin ");
let temp;

switch(targetString){
    case "F":
        temp = tempCelsius * 9/5 + 32;
        console.log(`The temperature in Fahrenheit is ${temp}`);
        break;
    case "C":
        console.log(`The temperature in Celsius is ${tempCelsius}`);
        break;
    case "K":
        temp = tempCelsius + 273.15; 
        console.log(`The temperature in Kelvin is ${temp}`);
        break;
    default:
        console.log("You didn't enter the right command!");

}

console.log("Name length exercise");
let name1 = prompt("Enter a name");
let name2 = prompt("Enter another name");
let name3 = prompt("Enter a third name");

if(name1.length > name2.length && name1.length > name3.length){
        console.log(`${name1} has the longest length`);
}
else if(name2.length > name1.length && name2.length > name3.length){
    console.log(`${name2} has the longest length`);
}
else if(name3.length > name1.length && name3.length > name2.length){
    console.log(`${name3} has the longest length`);
}
else if(name1.length === name2.length && name1.length === name3.length){
    console.log(`${name1}, ${name2}, and ${name3} all share the same length!`)
}

if(name1.length === name2.length){
    console.log(`${name1} and ${name2} share the same length.`);
}
if(name2.length === name3.length){
    console.log(`${name2} and ${name3} share the same length.`);
}
if(name1.length === name3.length){
    console.log(`${name1} and ${name3} share the same length`);
}
