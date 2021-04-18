const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://root:root@cluster0.oqept.mongodb.net/myFirstDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 
    'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods', 
    'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next()
})

// bodyParser is deprecated in express 4.16+, using the latest apporach here...
app.use(express.json())
app.use(express.urlencoded({extended:false}))

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT || 3001)