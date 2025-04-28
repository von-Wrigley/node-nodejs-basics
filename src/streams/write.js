import fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from "node:url";

const write = async () => {
    const dirname = fileURLToPath(new URL('.', import.meta.url));
    const filePath = join(dirname, 'files/fileToWrite.txt');
    const writeableStream = fs.createWriteStream(filePath, 'utf-8');
    process.stdin.on('data', data=> {
        if(data==='exit'){
            process.exit()
        }
else {
    writeableStream.write(data)
}
    })
};

await write();
