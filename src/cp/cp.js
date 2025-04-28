import { fork } from 'child_process';
import { join } from 'path';
import { fileURLToPath } from "node:url";

const spawnChildProcess = async (args) => {
    const dirname = fileURLToPath(new URL('.', import.meta.url));
    const filePath = join(dirname, 'files/script.js');
    const child = fork(filePath, args, {
        silent: true
    })
      process.stdin.pipe(child.stdin)
      child.stdout.pipe(process.stdout)
      return child
  
};

spawnChildProcess(['someArgument1', 'someArgument2']);
