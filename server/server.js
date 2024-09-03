const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Import routes
const userRoutes = require('./userRoutes');
const groupRoutes = require('./groupRoutes');
const channelRoutes = require('./channelRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/channels', channelRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
