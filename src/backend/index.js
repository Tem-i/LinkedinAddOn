const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

// Replace the URI string with your MongoDB connection string.
const uri = "mongodb+srv://eddie:zRwCsdgAaLUjwUeA@linkedinaddon.9n4in.mongodb.net/?retryWrites=true&w=majority&appName=linkedinaddon";
const client = new MongoClient(uri);

const app = express();
const port = 5000; // Set to a different port than React

// CORS configuration: Allow only the React app origin (localhost:3000)
app.use(cors({
  origin: 'http://localhost:3000', // Specify React's URL
  methods: ['GET', 'POST'], // Specify allowed methods
  credentials: true // Allow credentials if needed
}));

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Route to get movie data
    app.get('/api/data', async (req, res) => {
      try {
        const query = { title: 'Back to the Future' };
        const movie = await movies.findOne(query);
        
        res.json({ message: 'Movie data from MongoDB', movie });
      } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
      }
    });

  } finally {
    // Optionally handle closing the client
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
