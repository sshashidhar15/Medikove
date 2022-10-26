
const config = require('./config');

//express app setup

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//redis setup

const redis = require('redis');

const redisClient = redis.createClient({
  host: '127.0.0.1',
  port: 6379,
  retry_strategy: () => 1000,
});



app.use('/login', (req, res) => {
  const y= []
  res.send({
    token: 'test123'
  });
});

app.get('/values', async(req,res) => {
  redisClient.hgetall('values',(err,values) => {
    res.send({
      t:values});
    redisClient.set('mykey2','test4');
});
});
app.listen(8083, () => console.log('API is running on http://localhost:8083/login'));

/*git commit */