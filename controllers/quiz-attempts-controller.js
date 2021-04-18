const quizAttemptsService = require('../services/quiz-attempts-service')

module.exports = app => {

    app.post('/api/quizzes/:quizId/attempts', (req, res) => {
        const quizId = req.params.quizId
        quizAttemptsService.createAttempt(quizId, req.body).then(attempt =>
            res.json(attempt))
    })

    app.get('/api/quizzes/:quizId/attempts', (req, res) => {
        const quizId = req.params.quizId
        quizAttemptsService.findAttemptsForQuiz(quizId).then(attempts => 
            res.json(attempts))
    })
}