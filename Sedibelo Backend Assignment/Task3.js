const fs = require('fs');

const uniqueUsers = require('./uniqueUsers.json');

const orderedUsers = uniqueUsers.sort((a, b) => a.name.localeCompare(b.name));
try
{


fs.writeFileSync('orderedUsers.json', JSON.stringify(orderedUsers, null, 2));
console.log('orderedUsers.json created successfully!');

} catch(err) {
    console.log(err)
    }