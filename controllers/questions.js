const Questions = require('../models/questions')
const mongoose = require('mongoose')

module.exports = {
    view: function (req, res) {
        Questions.find((err, questions) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(people);
        })
    },
    edit: function (req, res) {
        Questions.findByIdAndUpdate(
            req.params.question_ID,
            req.body,
            { new: true },
            (err, question) => {
                if (err) return res.status(500).send(err);
                return res.send(question);
            }
        )
    },
    delete: function (req, res) {
        Questions.findByIdAndRemove(req.params.todoId, (err, todo) => {
            if (err) return res.status(500).send(err);
            const response = {
                message: "Question successfully deleted",
                id: todo._id
            };
            return res.status(200).send(response);
        })
    },
    create: function (req, res) {
        let newQuestion = req.body.question
        let newID = req.body.petID

        console.log('New Question', newQuestion)
        console.log('New petID', newID)

        // newQuestion.save(err => {
        //     if (err) return res.status(500).send(err)
        //     return res.status(200).send(newQuestion)
        // })
        res.sendStatus(200)
    }
};
