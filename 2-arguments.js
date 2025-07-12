const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log(`${args[0]} Argument found`);
} else if (args.length === 2) {
  console.log(`${args[0]} ${args[1]} Arguments found`);
} else {
  console.log("Good work done");
}

if (args.lenth===1){
    console.log(`${args[0]} Argument found`);
} else{
    console.log("ignored");
}

if (args.length===2){
    console.log(`${args[0]} ${args[1]} Arguments found`)
} else {
    console.log("Never mind");
}