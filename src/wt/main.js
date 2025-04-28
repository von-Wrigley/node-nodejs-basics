import os from 'node:os'
import { Worker } from 'node:worker_threads';
import { fileURLToPath } from "node:url";
import { join } from 'path';

const performCalculations = async () => {
           const cores =  os.cpus().length
        let arrNum =  []
        let x =  []
        const dirname = fileURLToPath(new URL('.', import.meta.url));
        const filePath = join(dirname, 'worker.js');

   for(let i = 0; i< cores; i++){
         const myWorker = new Worker(filePath);
         const num = 10 +i 
         myWorker.postMessage(num)
        x.push(  new Promise((resolve, reject) =>{
            myWorker.on('message', (message) => {
                arrNum.push(message) 
                    resolve()     }
                   ),   
            myWorker.on('error', (message) => {
                    arrNum.push(message)
                            reject()
                        } )}))
        
        }
          
          await   Promise.all(x);
          console.log(arrNum)
};

await performCalculations();
