const questionService = require('../services/questions-service')

module.exports = app => {

    app.get('/api/questions', (req, res) => {
        questionService.findAllQuestions().then(questions =>
            res.json(questions))
    })

    app.get('/api/questions/:questionId', (req, res) => {
        const questionId = req.params.questionId
        questionService.findQuestionById(questionId).then(questions =>
            res.json(questions))
    })

    app.get('/api/quizzes/:quizId/questions', (req, res) => {
        const quizId = req.params.quizId
        questionService.findQuestionsForQuiz(quizId).then(questions =>
            res.json(questions))
    })
}