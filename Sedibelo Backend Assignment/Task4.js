
const fs = require('fs');

// Load data from uniqueUsers.json
const uniqueUsers = require('./uniqueUsers.json');

    try
    {
    const engineeringUsers = uniqueUsers.filter(user => user.department === 'ENGINEERING');

    const michaelPhalaneReports = engineeringUsers.filter(user => user.name === 'MICHAEL' && user.surname==='PHALANE');

    const totalReports = michaelPhalaneReports.length;

    console.log(`Total number of people reporting to Michael Phalane: ${totalReports}`);

    } catch(err) {
    console.log(err)
    }