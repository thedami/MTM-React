const express = require('express');
const router = express.Router();
const ArtistController = require('../controller/artist.controller');
const {check} = require('express-validator');

router.post('/', [check('LastName').isAlpha('en-US',{ignore:" "}),
				check('FirstName').isAlpha('en-US',{ignore:" "}),
				check('Address').isAlpha('en-US',{ignore:" "}),
				check('Telephone').isAlphanumeric(),
				check('Email').isAlphanumeric(),
				check('AManagerID').isAlphanumeric()],
				ArtistController.addArtist);
router.get('/', ArtistController.findArtist);
router.get('/:id', ArtistController.findArtistByID);
router.put('/:id', [check('LastName').isAlpha('en-US',{ignore:" "}),
				check('FirstName').isAlpha('en-US',{ignore:" "}),
				check('Address').isAlpha('en-US',{ignore:" "}),
				check('Telephone').isAlphanumeric(),
				check('Email').isAlphanumeric(),
				check('AManagerID').isAlphanumeric()],
				ArtistController.updateArtist);
router.delete('/:id', ArtistController.deleteById);

module.exports = router;