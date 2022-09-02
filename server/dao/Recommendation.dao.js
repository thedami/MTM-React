const Recommend = require('../models/Recommendation');
var RecommendDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateRecommend: updateRecommend
}

function findAll() {
    return Recommend.findAll();
}

function findById(RecommendationID) {
    return Recommend.findByPk(RecommendationID);
}

function deleteById(RecommendationID) {
    return Recommend.destroy({ where: { RecommendationID: RecommendationID } });
}

function create(recommendation) {
    var newRecommend = new Recommend(recommendation);
    return newRecommend.save();
}

function updateRecommend(recommendation, RecommendationID) {
    var updateRecommend = {
        Description: recommendation.Description,
        DateReceived: recommendation.DateReceived
    };
    return Recommend.update(updateRecommend, { where: { RecommendationID: RecommendationID } });
}
module.exports = RecommendDao;