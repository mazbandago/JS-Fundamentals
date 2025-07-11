const args = process.argv.slice(2);

if (args.length === 0) {
console.log("No argument");
}else{
    console.log("No argument");
}

const args1 = process.argv.slice(2);
if(args1.length===1){
console.log(`Best ${args1[0]} found`);
} else{
console.log("Argument found");
}

const args2 = process.argv.slice(2);
if(args2.length===2){
console.log(`${args2[0]} and ${args2[1]}`);
} else{
console.log("Arguments found");
}