const fs = require('fs');
const filePath = 'C:/Users/Tony/Code/HTML/Javascript/Lab_07/content/user';

const usName = fs.readFileSync(filePath, 'utf8');
console.log(usName);
