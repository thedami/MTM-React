const express = require('express');
const router = express.Router();
const RecommendController = require('../controller/Recommendation.controller');
const {check} = require('express-validator')

router.post('/', [check('Description').isAlpha('en-US',{ignore:" "}),
				check('DateReceived').isDate()],
				RecommendController.addRecommend);
router.get('/', RecommendController.findRecommend);
router.get('/:id', RecommendController.findRecommendByID);
router.put('/:id', [check('Description').isAlpha('en-US',{ignore:" "}),
				check('DateReceived').isDate()],
				RecommendController.updateRecommend);
router.delete('/:id', RecommendController.deleteById);

module.exports = router;