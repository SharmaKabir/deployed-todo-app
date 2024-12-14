const Pool= require('pg').Pool;
//require('dotenv').config();
//pool used for communicationg w postgresql
const pool= new Pool({
    // user: process.env.USERNAME,
    // password:process.env.PASSWORD,
    // hots:process.env.HOST,
    // port:process.env.DBPORT,
    user: 'kabirsharma',
    password:21042004,
    hots:'localhost',
    port:5432,
    database:'todoapp'
})

module.exports=pool;