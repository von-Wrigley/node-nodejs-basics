import { createGzip  } from 'node:zlib'
import { fileURLToPath } from "node:url";
import {
    createReadStream,
    createWriteStream,
  } from 'node:fs';
  import { pipeline } from 'node:stream';
  import process from 'node:process';
  import { join } from 'path';

const decompress = async () => {
    const dirname = fileURLToPath(new URL('.', import.meta.url));
    const filePath = join(dirname, 'files/fileToCompress.txt');
    const newfilePath = join(dirname, 'files/archive.gz');
    const gzip  = createGzip()
    const source = createReadStream(newfilePath);
    const destination = createWriteStream(filePath);

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
});
};

await decompress();
