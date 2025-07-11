const noArgument = function(){
    let one = "No argument";
    return one;
};
let caseONe = noArgument();
console.log(caseONe);

const oneArgument = function(put){
    let two = `${put}`;
    return two;
};
let caseTwo = oneArgument("Best Argument found");
console.log(caseTwo);
const twoArgument = function(saa, kara){
    return `${saa} ${kara}`;
};
let caseThree = twoArgument("Best School", "Arguments found");
console.log(caseThree);

