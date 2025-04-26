import { env } from 'node:process';

const parseEnv = () => {
    let objEnv = []
    for (const [key, value] of Object.entries(env)) {
        
        if(key.startsWith('RSS_')){   
            objEnv.push(`${key} = ${value}`)    
    }
      }
      console.log(objEnv.join('; '))
};

parseEnv();
