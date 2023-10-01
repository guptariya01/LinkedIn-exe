const sequelize = require('./connection');
const {Data} = require('sequelize');
const Profile = sequelize.define("profiles", {
    name: {
      type: Data.STRING,
      allowNull: false
    },
    url:{
      type: Data.STRING,
    },
    bio: {
      type: Data.STRING,
      allowNull: false
    },
    location: {
      type: Data.STRING,
      allowNull: false
    },
    followersCount:{
      type: Data.STRING,
    },
    connectionsCount:{
      type: Data.STRING,
    }
 });
 
 sequelize.sync().then(() => {
    console.log('It is a profile');
 }).catch((error) => {
    console.error('Not able to create table : ', error);
});

module.exports = Profile;