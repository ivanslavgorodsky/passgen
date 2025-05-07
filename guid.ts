import { v4 as uuidv4 } from 'uuid';

function generateGuid() {
  const args = process.argv;
  const guidsCount = Number(args[2]) || 5;
  const myUUIDs = new Array<string>();
    
  for (let i = 0; i < guidsCount; i++) {
    myUUIDs.push(uuidv4())
  }
    
  console.log(`Your new ${guidsCount} UUID(s): \n`);
  console.log(myUUIDs.join('\r\n'));

  return myUUIDs;
}

generateGuid();
