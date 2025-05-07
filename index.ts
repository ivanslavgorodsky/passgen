function main() {
  const args = process.argv;
  console.debug("Arguments: ", args);

  console.log(`
    There are currently 4 commands:
    1. npm run hash [PASSWORD] - Generates password hash by password string
    2. npm run rand [RANDOM_BYTES_COUNT] - Generates Base64-encoded random bytes 
    3. npm run guid [GUIDS_COUNT] - Generates UUIDs
    4. npm run pass [PASSWORD_COUNT] [PASSWORD_LENGTH] - Generates random password strings
  `);
}

main();
