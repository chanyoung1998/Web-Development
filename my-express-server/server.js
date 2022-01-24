const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
  res.send('Contact me!')
})
app.get('/hobby', (req, res) => {
  res.send('coffee and beer')
})
app.get('/about', (req, res) => {
  res.send('my name is chan! i am programmenr')
})
app.listen(3000,function(){
  console.log("port 3000");
});
