const express = require('express');
const router = express.Router();
const NewsController = require('../controller/News.controller');
const {check} = require('express-validator');


router.post('/', [check('Source').isAlpha('en-US',{ignore:" "}),
				check('Contents').isAlpha('en-US',{ignore:" "}),
				check('ArtistID').isAlphanumeric()],
				NewsController.addNews);
router.get('/', NewsController.findNews);
router.get('/:id', NewsController.findNewsByID);
router.put('/:id', [check('Source').isAlpha('en-US',{ignore:" "}),
				check('Contents').isAlpha('en-US',{ignore:" "}),
				check('ArtistID').isAlphanumeric()],
				NewsController.updateNews);
router.delete('/:id', NewsController.deleteById);

module.exports = router;