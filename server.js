 const express = require('express');
 const app = express();
 const sequelize = require('./connection');
 const Profile = require('./schemaa');


 app.use(express.urlencoded({extended:true}));

 app.post("/", async (req,res)=>{

    const data =await req.body;
    const key =Object.keys(data)[0];
    const keyjson =await JSON.parse(key);

    Profile.create({
        name:keyjson.name,
        url:keyjson.url,
        bio:keyjson.bio,
        location:keyjson.location,
        followersCount:keyjson.followersCount,
        connectionsCount:keyjson.connectionsCount

    }).then(res => console.log(res)).catch((e) => console.error(e) );
})

app.listen(3000,(e)=>{
    console.log("Server running at port 3000");
})