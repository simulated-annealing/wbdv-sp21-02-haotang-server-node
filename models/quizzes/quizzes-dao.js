const quizzesModel = require('./quizzzes-model')

const findAllQuizzes = () => 
    quizzesModel.find()

const findQuizById = quizId =>
    quizzesModel.findById(quizId)

module.exports = {findAllQuizzes, findQuizById}