const mongoose = require("mongoose")

const quizzesScheme = mongoose.Schema({
    _id: String,
    title: String,
    questions: [{
        type: String,
        ref: 'QuestionsModel'
    }]
}, {collection: "quizzes"})

module.exports = quizzesScheme