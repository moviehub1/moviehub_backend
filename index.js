const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors'); 





const app = express();
const uri = `mongodb+srv://vercel-admin-user:W12KcbEJtKSGpJzF@cluster0.vwpm7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
app.use(express.json());
app.use(cors()); // Retained the CORS middleware

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.log("Error connecting to MongoDB Atlass", error);
    throw error;
  }
}

(async () => {
  try {
    await connectToDatabase();
    const db = client.db('flexfitdb');
    const loginCollection = db.collection('logins');
    
        app.get('/', async (req, res) => {
      try {
        // Check if the collection exists
        const collectionExists = await loginCollection.findOne();
        if (collectionExists) {
          res.send('Database connection and collection are successfully connected!');
        } else {
          res.send('Database connection is successful, but the collection does not exist or is empty.');
        }
      } catch (error) {
        console.error("Error testing database connection:", error);
        res.status(500).send("Error  testing database connection: " + error.message);
      }
    });





  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`Server running on port ${port}`));
} catch (error) {
  console.error("Error starting server:", error);
  process.exit(1);
}
})();














