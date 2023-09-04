require('./connection');
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const urlPort = 8080;
const io = new Server(server, {
  cors: '*',
  methods: '*',
});

const User = require('./models/User');
const userRoutes = require('./routes/UserRoutes');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users', userRoutes);
server.listen(urlPort, () => {
  console.log(`Server running at port ${urlPort}`);
});
