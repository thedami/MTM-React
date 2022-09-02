const RecommendDao = require('../dao/Recommendation.dao');
const {validationResult} = require('express-validator');

var RecommendController = {
    addRecommend: addRecommend,
    findRecommend: findRecommend,
    findRecommendByID: findRecommendByID,
    updateRecommend: updateRecommend,
    deleteById: deleteById
}

function addRecommend(req, res) {
    let recommendation = req.body;

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors: errors.array()})
    }

    RecommendDao.create(recommendation).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findRecommendByID(req, res) {
    RecommendDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    RecommendDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Recommendation deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateRecommend(req, res) {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(422).json({errors: errors.array()})
    }

    RecommendDao.updateRecommend(req.body, req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Recommendation updated successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findRecommend(req, res) {
    RecommendDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = RecommendController;
