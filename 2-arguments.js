const args = process.argv.slice(2);

if (args.length === 0) {
console.log("No argument");
}

const args1 = process.argv.slice(2);
if(args1.length===1){
console.log(`Best ${args1[0]} found`);
} else{
console.log("Best Argument found");
}

const args2 = process.argv.slice(2);
if(args2.length===2){
    console.log(`${args2[0]} ${args2[1]}`);
} else{
    console.log("Best School Arguments found");
}


// } else if (args.length === 1) {
//   console.log("Best Argument found");
// } else {
//   console.log("Best School Arguments found");
// }

