require('dotenv').config();

const mongoose = require('mongoose');
const connectionStr = `mongodb+srv://ecommercer-backend-yt:${process.env.MONGO_PASSWORD}@cluster0.g5sfns8.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(connectionStr, {useNewUrlParser: true})
  .then(() => console.log('connected to mongoose'))
  .catch((err) => console.log(err));

mongoose.connection.on('error', (err) => {
  console.log(err);
});
