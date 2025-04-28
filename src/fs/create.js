import fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from "node:url";

const create = async () => {
 const dirname = fileURLToPath(new URL('.', import.meta.url));
 const filePath = join(dirname, 'files/fresh.txt');
  
 try {
    await fs.promises.writeFile(filePath, 'I am fresh and young', { flag: 'wx' })
  } catch (error) {
    throw new Error('FS operation failed')
    
  }

};

await create();
