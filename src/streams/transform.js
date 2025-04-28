import { Transform } from 'node:stream';

const transform = async () => {
    const upperCaseTranform = new Transform({
        transform(chunk, encoding, callback) {
          this.push(chunk.toString().split('').reverse().join(''));
          callback();
        }
      });
    process.stdin.pipe(upperCaseTranform).pipe(process.stdout)
};

await transform();
