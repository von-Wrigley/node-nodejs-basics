import fs from 'node:fs/promises';
import { join } from 'path';
import { fileURLToPath } from "node:url";

const read = async () => {
   const dirname = fileURLToPath(new URL('.', import.meta.url));
   const oldPath = join(dirname, 'files/fileToRead.txt');
   try {
    let data = await fs.readFile(oldPath, 'utf8');
	console.log(data)
   } catch (error) {
    throw new Error('FS operation failed')
   }
};

await read();
