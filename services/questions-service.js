const questionsDao = require('../models/questions/questions-dao')

const findAllQuestions = () =>
    questionsDao.findAllQuestions()

const findQuestionById = questionId =>
    questionsDao.findQuestionById(questionId)

const findQuestionsForQuiz = quizId =>
    questionsDao.findQuestionsForQuiz(quizId)

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}