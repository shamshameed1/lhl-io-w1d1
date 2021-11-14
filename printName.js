const names = process.argv.slice(2);

let firstName = returnTheFirstNames(names); //creating a variable
printName(firstName);

function returnTheFirstNames(names) {
    return names[0];
}

function printName(name) {  //a function is created called printName and we are passing a parameter called name
    console.log("My name is " + name);
}



