const NewsDao = require('../dao/News.dao');
const {validationResult} = require('express-validator');

var NewsController = {
    addNews: addNews,
    findNews: findNews,
    findNewsByID: findNewsByID,
    updateNews: updateNews,
    deleteById: deleteById
}

function addNews(req, res) {
    let news = req.body;

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors: errors.array()})
    }

    NewsDao.create(news).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findNewsByID(req, res) {
    NewsDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    NewsDao.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "News deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateNews(req, res) {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors: errors.array()})
    }

    NewsDao.updateNews(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "News updated successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findNews(req, res) {
    NewsDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = NewsController;
