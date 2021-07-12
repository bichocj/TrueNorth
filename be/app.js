const express = require('express')
const fetch = require("node-fetch");
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/tasks', async(req, res) => {
  const n = req.query.n || 3;
  const namesServiceResponse = await fetch(`http://lorem-faker.vercel.app/api?quantity=${n}`);
  const namesServiceData = await namesServiceResponse.json();
  const data = namesServiceData.map(title => ({
    uuid: uuidv4(),
    title
  }));
  res.send(data)
})


app.put('/tasks/:uuid', async(req, res) => {
  const uuid = req.params.uuid;  
  console.log(`${uuid} marked as completed`);
  res.send({});
})

app.listen(port, () => {
  console.log(`server ready!`)
})