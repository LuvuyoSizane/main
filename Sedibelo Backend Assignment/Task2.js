const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs');

const usersData = require('./usersBackEnd.json');

try{

const nameSurnameCounts = {};
usersData.forEach(user => {
  const key = `${user.name}_${user.surname}`;
  nameSurnameCounts[key] = (nameSurnameCounts[key] || 0) + 1;
});

const csvWriter = createCsvWriter({
  path: 'userCounts.csv',
  header: [
    { id: 'name', title: 'Name' },
    { id: 'surname', title: 'Surname' },
    { id: 'count', title: 'Number of times duplicated' },
  ],
});

const csvData = Object.keys(nameSurnameCounts).map(key => {
  const [name, surname] = key.split('_');
  return { name, surname, count: nameSurnameCounts[key] };
});

csvWriter.writeRecords(csvData)
  .then(() => console.log('userCounts.csv created successfully!'));

} catch(err) {
  console.log(err)
  }