const quizAttemptDao = require('../models/quiz-attempts/quiz-attempts-dao')

const createAttempt = (quizId, attempt) =>
    quizAttemptDao.createAttempt(quizId, attempt)

const findAttemptsForQuiz = quizId =>
    quizAttemptDao.findAttemptsForQuiz(quizId)

module.exports = {
    createAttempt,
    findAttemptsForQuiz
}