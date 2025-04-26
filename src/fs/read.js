import fs from 'node:fs/promises';


const read = async () => {
   try {
  
    let data = await fs.readFile('src/fs/files/fileToRead.txt', 'utf8');
	console.log(data);
    
   } catch (error) {
    throw new Error('FS operation failed')
   }
};

await read();
