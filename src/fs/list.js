import { readdir } from 'node:fs/promises';

const list = async () => {


    try {
       
        const contents = await readdir("src/fs/files");
        console.log(contents);
      } catch (err) {
        throw new Error('FS operation failed')
      }
   
};

await list();
