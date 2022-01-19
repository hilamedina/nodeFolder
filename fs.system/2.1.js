const fs = require('fs');
const path = require('path');

fs.writeFileSync('file.txt', 'Hila');
fs.copyFileSync('file.txt', 'copyFile.txt');
fs.renameSync('file.txt', 'newName.txt');

const testFolder = '../fs.system/';
fs.readdirSync(testFolder).forEach((file) => {
  console.log(file);
});
