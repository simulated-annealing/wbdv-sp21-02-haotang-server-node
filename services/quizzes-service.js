const quizzesDao = require('../models/quizzes/quizzes-dao')

const findAllQuizzes = () => 
    quizzesDao.findAllQuizzes()

const findQuizById = quizId => 
    quizzesDao.findQuizById(quizId)

module.exports = {
    findAllQuizzes,
    findQuizById
}