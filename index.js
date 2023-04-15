const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Serve the HTML file at the root path
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});