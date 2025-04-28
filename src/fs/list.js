import { readdir } from 'node:fs/promises';
import { join } from 'path';
import { fileURLToPath } from "node:url";

const list = async () => {

  const dirname = fileURLToPath(new URL('.', import.meta.url));
  const oldPath = join(dirname, 'files');
    try {
        const contents = await readdir(oldPath);
        console.log(contents);
      } catch (err) {
        throw new Error('FS operation failed')
      }
   
};

await list();
