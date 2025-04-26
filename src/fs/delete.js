
import { access, unlink, constants } from 'fs/promises';

const remove = async () => {
    
try {

    await access('src/fs/files/fileToRemove.txt', constants.F_OK)
    await unlink('src/fs/files/fileToRemove.txt')
    
} catch (error) {
    throw new Error('FS operation failed')
}



};

await remove();
