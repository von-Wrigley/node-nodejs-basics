import fs from 'fs';
import path from 'node:path';


const create = async () => {
 const x = path.join('src/fs/files', 'fresh.txt')
  try {
    
    await fs.promises.writeFile(x, 'I am fresh and young', { flag: 'wx' })

  } catch (error) {
    throw new Error('FS operation failed')
    
  }

};

await create();
