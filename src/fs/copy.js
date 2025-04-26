import { access, constants } from 'fs';
import fs from 'fs/promises';

const copy = async () => {

access('src/fs/files_copy', constants.F_OK, error => {
 if(error){

     fs.mkdir('src/fs/files_copy')
     fs.cp('src/fs/files', 'src/fs/files_copy',  {recursive: true});

 }
 else{
    throw new Error('FS operation failed')
 }

})
    

};

await copy();
