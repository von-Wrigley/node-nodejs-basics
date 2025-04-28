import { join } from 'path';
import { fileURLToPath } from "node:url";
import { access, unlink, constants } from 'fs/promises';

const remove = async () => {
    const dirname = fileURLToPath(new URL('.', import.meta.url));
    const oldPath = join(dirname, 'files/fileToRemove.txt');
try {

    await access(oldPath, constants.F_OK)
    await unlink(oldPath)
    
} catch (error) {
    throw new Error('FS operation failed')
}
};

await remove();
