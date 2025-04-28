import crypto from 'crypto'
import fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from "node:url";

const calculateHash = async () => {

   const dirname = fileURLToPath(new URL('.', import.meta.url));
   const filePath = join(dirname, 'files/fileToCalculateHashFor.txt');
   const str = fs.createReadStream(filePath)

   str.on('data', data => {
    const hash = crypto.createHash('sha256')
    hash.update(data)
    console.log(hash.digest('hex')) 
   })
   
};

await calculateHash();
