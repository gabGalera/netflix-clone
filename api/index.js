const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL,
    { useNewUrlParser: true, 
      useUnifiedTopology: true, 
    }
  )
  .then(() => console.log("DB connection Successfull!"))
  .catch((err) => console.log(err))

app.listen(8800, () => {
  console.log('Bakend server is running!')
})