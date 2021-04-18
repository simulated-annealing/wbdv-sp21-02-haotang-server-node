const quizService = require('../services/quizzes-service')

module.exports = app => {

    app.get('/api/quizzes', (req, res) => {
        quizService.findAllQuizzes().then(quizzes =>
            res.json(quizzes))
    })

    app.get('/api/quizzes/:quizId', (req, res) => {
        const quizId = req.params.quizId
        quizService.findQuizById(quizId).then(quiz =>
            res.json(quiz))
    })
}