const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  const y= []
  res.send({
    token: 'test123'
  });
});
app.listen(5000, () => console.log('API is running on http://localhost:8083/login'));

/*git commit */