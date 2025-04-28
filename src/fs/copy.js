import { access, constants } from 'fs';
import fs from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from "node:url";

const copy = async () => {
    const dirname = fileURLToPath(new URL('.', import.meta.url));
    const oldPath = join(dirname, 'files');
    const newPath = join(dirname, 'files_copy');
   
access(newPath, constants.F_OK, error => {
 if(error){

     fs.mkdir(newPath)
     fs.cp(oldPath, newPath,  {recursive: true});
 }
 else{
    throw new Error('FS operation failed')
 }

})
};

await copy();
