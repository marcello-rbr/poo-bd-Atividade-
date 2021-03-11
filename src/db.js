let Sequelize = require("sequelize");

let db = new Sequelize(
    "postgres://aqikzoverbckmp:cdb945f7fdbb2588c57578da22f964b0783147e3fc3a3ac87236983f29a08e6c@ec2-3-221-243-122.compute-1.amazonaws.com:5432/duiiog9s8muan",
    {
        dialect: "postgres",
         dialectOptions: {
             ssl: {
                 rejectUnauthorized: false, // very important

             }
         }
    });

module.exports = db;