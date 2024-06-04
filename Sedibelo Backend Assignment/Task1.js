const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const usersData = require('./usersBackEnd.json');

try{
const uniqueUsers = Object.values(usersData.reduce((acc, user) => {
  const key = `${user.name}_${user.surname}`;
  if (!acc[key]) {
    acc[key] = { id: uuidv4(), ...user  };
  }
  return acc;
}, {}));

fs.writeFileSync('uniqueUsers.json', JSON.stringify(uniqueUsers, null, 2));
console.log('uniqueUsers.json created successfully!');

} catch(err) {
  console.log(err)
  }
