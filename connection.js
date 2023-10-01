const {Sequelize} = require("sequelize");
const sequelize = new Sequelize(
        'linkedin',
        'root',
        'riyag*',
         {
           host: 'localhost',
           dialect: 'mysql'
         }
    );
    sequelize.authenticate().then(() => {
        console.log('Connection established successfully.');
    }).catch((error) => {
        console.error('Unable to connect ');
    });
module.exports = sequelize;