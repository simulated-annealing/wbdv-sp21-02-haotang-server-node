const questionService = require('../services/questions-service')

module.exports = app => {

    app.get('/api/quizzes/:quizId/questions', (req, res) => {
        const quizId = req.params.quizId
        const questions = questionService.findQuestionsForQuiz(quizId)
        res.send(questions)
    })
}