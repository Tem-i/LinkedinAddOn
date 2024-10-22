const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

// Replace the URI string with your MongoDB connection string.
const uri = "mongodb+srv://eddie:zRwCsdgAaLUjwUeA@linkedinaddon.9n4in.mongodb.net/?retryWrites=true&w=majority&appName=linkedinaddon";
const client = new MongoClient(uri);

const app = express();
const port = 5000; // Set to a different port than React

app.use(cors());  // Allow cross-origin requests from React

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Route to get movie data
    app.get('/api/data', async (req, res) => {
      try {
        // Query for a movie that has the title 'Back to the Future'
        const query = { title: 'Back to the Future' };
        const movie = await movies.findOne(query);
        
        res.json({ message: 'Movie data from MongoDB', movie });
      } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
      }
    });

  } finally {
    // We can handle closing the client after server stops if necessary
    // await client.close();  // Not closing client to keep connection live
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
