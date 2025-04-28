import fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from "node:url";

async function readAndPrintFile() {
    const dirname = fileURLToPath(new URL('.', import.meta.url));
    const filePath = join(dirname, 'files/fileToRead.txt');
    const fileStream = fs.createReadStream(filePath, 'utf8');
 fileStream.on('data', chunk=> {
  process.stdout.write(chunk, 'utf8')
 })
 fileStream.on('end', () => process.stdout.write('\n'));
}

await readAndPrintFile();
