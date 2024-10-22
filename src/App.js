import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the Express server running on port 5000
    fetch('http://localhost:5000/api/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
      {data ? (
        <div>
          <p>{data.message}</p>
          <pre>{JSON.stringify(data.movie, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
