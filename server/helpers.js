const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://glitch-flask-light-streets:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.zd3wh.mongodb.net/<dbname>?retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("address_db").collection("address collection");
  // perform actions on the collection object
  client.close();
});
