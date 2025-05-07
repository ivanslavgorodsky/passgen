import * as bcrypt from 'bcrypt';
import { generatePassword } from './util';

function generatePasswordHash() {
  const args = process.argv;
  const password = args[2] || generatePassword(25);
  console.log(`Password string: ${password}`);

  const salt = bcrypt.genSaltSync(10);
  const passwdHash = bcrypt.hashSync(password, salt);
  console.log(`Password hash: ${passwdHash}`);

  return passwdHash;
}

generatePasswordHash();
