import { generatePassword } from './util';

function genPasswords() {
  const args = process.argv;
  const passCount = Number(args[2]) || 5;
  const passLength = Number(args[3]) || 16;
  const myPasswords = new Array<string>();
    
  for (let i = 0; i < passCount; i++) {
    myPasswords.push(generatePassword(passLength));
  }
    
  console.log(`Your new ${passCount} password(s) with length = ${passLength}: \n`);
  console.log(myPasswords.join('\r\n'));

  return myPasswords;
}

genPasswords();
