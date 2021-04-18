const quizAttemptsModel = require('./quiz-attempts-model')

const scoreQuiz = questions => {
    let numOfCorrectQuestions = 0
    questions.forEach(q => 
        q.answer === q.correct ? numOfCorrectQuestions++ : numOfCorrectQuestions)
    return 100*numOfCorrectQuestions/questions.length
}

const findAttemptsForQuiz = quizId => 
    quizAttemptsModel.find({quiz:quizId}).populate('quiz', 'title _id')

const createAttempt = (quizId, attempt) =>
    quizAttemptsModel.create({quiz: quizId, answers: attempt, score: scoreQuiz(attempt)})

module.exports = {createAttempt, findAttemptsForQuiz}