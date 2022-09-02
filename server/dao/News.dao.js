const News = require('../models/News');
var NewsDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateNews: updateNews
}

function findAll() {
    return News.findAll();
}

function findById(NewsID) {
    return News.findByPk(NewsID);
}

function deleteById(NewsID) {
    return News.destroy({ where: { NewsID: NewsID } });
}

function create(news) {
    var newNews = new News(news);
    return newNews.save();
}

function updateNews(news, NewsID) {
    var updateNews = {
        Source: news.Source,
        Content: news.Content,
        ArtistID: news.ArtistID,
    };
    return News.update(updateNews, { where: { NewsID: NewsID } });
}
module.exports = NewsDao;