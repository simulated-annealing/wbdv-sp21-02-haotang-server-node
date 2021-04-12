const questions = require('./questions.json')

// NodeJS Assignment
const findQuestionsForQuiz = quizId =>
    questions.filter(q =>
        q.quizId === quizId)

// MongoDB Assignment
const createQuestion = () => {}
const updateQuestion = () => {}
const deleteQuestion = () => {}


module.exports = {
    findQuestionsForQuiz,
    createQuestion,
    updateQuestion,
    deleteQuestion
}