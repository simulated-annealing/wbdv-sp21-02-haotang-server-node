const mongoose = require('mongoose')
const quizzesSchema = require('./quizzes-scheme')

const quizzesModel = mongoose.model('QuizzesModel', quizzesSchema)

module.exports = quizzesModel