const quizzes = require('./quizzes.json')

// NodeJS Assignment
const findAllQuizzes = () => 
    quizzes

const findQuizById = quizId => 
    quizzes.find(q =>
        q._id === quizId)

// MongoDB Assignment
const createQuiz = () => {}
const updateQuiz = () => {}
const deleteQuiz = () => {}


module.exports = {
    createQuiz,
    findAllQuizzes,
    findQuizById,
    updateQuiz,
    deleteQuiz
}