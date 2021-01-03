const { MongoClient } = require("mongodb");



module.exports = {
  run: async () => {
    console.log("<run >" + process.env.MONGO_ATLAS_PASSWORD);


    const dbName = "address_db";

    // Connection URI
    const uri =`mongodb+srv://node-backend-user:${process.env.MONGO_ATLAS_PASSWORD}@`+
      `cluster0.zd3wh.mongodb.net/${dbName}?authSource=admin&retryWrites=true&w=majority`;

    // Create a new MongoClient
    const client = new MongoClient(uri);

    try {
      // Connect the client to the server
      await client.connect();
      // Establish and verify connection
      await client.db("admin").command({ ping: 1 });
      console.log("Connected successfully to server");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
    run().catch(console.dir);
  }
}
