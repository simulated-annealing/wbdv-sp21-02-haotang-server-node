const quizService = require('../services/quizzes-service')

module.exports = app => {

    app.get('/api/quizzes', (req, res) => {
        const quizzes = quizService.findAllQuizzes()
        res.send(quizzes)
    })

    app.get('/api/quizzes/:quizId', (req, res) => {
        const quizId = req.params.quizId
        const quiz = quizService.findQuizById(quizId)
        res.send(quiz)
    })
}