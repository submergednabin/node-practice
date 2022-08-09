// const express = require('express');
// const route = require('./routes/index');
// const app = express();
// app.use('/', route);
// const port = process.env.PORT || 1234;
// app.listen(port, ()=>{
//   console.log("Adventure Trails welcomes you!")
// })

const express = require('express');
const route = require('./routes/index')
const userRoute = require('./routes/users');
const bodyParser = require('body-parser');
const myReqLogger = require('./utilities/RequestLogger');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(myReqLogger);
const port = process.env.PORT || 3232;

// const myLogger = function (req, res, next) {
//   console.log(`Req method is ${req.method}`);
//   console.log(`Req url is ${req.url}`);
//   next();
// };
// app.use(myLogger)
app.use('/', route);
// app.use('/', userRoute);
app.listen(port, ()=>{
  console.log(`Server listing in port ${port}`)
})
