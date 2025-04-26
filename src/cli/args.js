import { argv } from 'node:process';
let argvResult = []
const parseArgs = () => {
for(let i = 2; i< argv.length; i+=2){
    argvResult.push((argv[i]).slice(2) + " is " + argv[i+1])  
}
console.log(argvResult.join(', '))
};
parseArgs();
