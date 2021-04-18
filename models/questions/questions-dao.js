const questionsModel = require('./questions-model')
const quizzesModel = require('../quizzes/quizzzes-model')

const findAllQuestions = () => 
    questionsModel.find()

const findQuestionById = questionId => 
    questionsModel.findById(questionId)

const findQuestionsForQuiz = quizId =>
    quizzesModel.findById(quizId).populate('questions').then(quiz =>
        quiz.questions)

module.exports = {findAllQuestions, findQuestionById, findQuestionsForQuiz}

