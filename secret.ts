import * as crypto from 'crypto';

// The SECRET_KEY should be a 32 byte string. You can generate one using the following script
function generateSecretKey() {
  const args = process.argv;
  const bytesCount = Number(args[2]) || 32;
  console.log(`Bytes count input: ${bytesCount}`);

  const buffer = crypto.randomBytes(bytesCount);  // Generate random bytes
  const randomString = buffer.toString('base64');

  console.log(`${bytesCount}-byte random string: ${randomString}`);
  return randomString;
}

generateSecretKey();
