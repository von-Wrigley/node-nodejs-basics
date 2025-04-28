import { parentPort  } from 'node:worker_threads';
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
 parentPort.on('message', (num) => {
    try {
     let x = nthFibonacci(num)
    parentPort.postMessage({
        status: 'resolved',
        data: x
    })
}
        
     catch (error) {
        parentPort.postMessage({
            status: 'error',
            data: null
        })        
    }} )
};

sendResult();
