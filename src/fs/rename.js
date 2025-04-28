import { access } from 'node:fs';
import fs from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from "node:url";

const rename = async () => {
    const dirname = fileURLToPath(new URL('.', import.meta.url));
    const wrongPath = join(dirname, 'files/wrongFilename.txt');
    const properPath = join(dirname, 'files/properFilename.md');

     access(wrongPath || properPath, fs.constants.F_OK, err =>{
       if(err){
       
        throw new Error('FS operation failed')
       }
try{   fs.rename(wrongPath, properPath);
    }
    catch(err){
        throw new Error('FS operation failed')
    }    
    })    
};

await rename();
