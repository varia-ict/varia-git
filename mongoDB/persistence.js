const url = `mongodb://127.0.0.1:27017/apiTest`
const config = { useNewUrlParser: true, useUnifiedTopology: true, poolSize: 10 }
const mongo = require('mongodb').MongoClient
const dbClient = async () => {
    let data
    try {
     const client = await mongo.connect(url, config);
     data = client.db('apiTest');
    
    } catch (err) {
        throw err;
    }
    return data;
};
module.exports.dbClient = dbClient;