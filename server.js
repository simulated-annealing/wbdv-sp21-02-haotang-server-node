const app = require('express')()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 
    'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods', 
    'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next()
})

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
 
app.listen(process.env.PORT || 3001)