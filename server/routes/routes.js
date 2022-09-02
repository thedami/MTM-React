const express = require('express');
const router = express.Router();
const AManagerRoutes = require('./AManager.route');
const ArtistRoutes = require('./Artist.route');
const AsstRoutes = require('./Asst.route');
const ContractRoutes = require('./Contract.route');
const EventRoutes = require('./Event.route');
const ExpenseRoutes = require('./Expense.route');
const NewsRoutes = require('./News.route');
const RecommendationRoutes = require('./Recommendation.route');
const ScheduleRoutes = require('./Schedule.route');


router.use('/AManager', AManagerRoutes);
router.use('/artist', ArtistRoutes);
router.use('/asst', AsstRoutes);
router.use('/contract', ContractRoutes);
router.use('/event', EventRoutes);
router.use('/expense', ExpenseRoutes);
router.use('/news', NewsRoutes);
router.use('/recommendation', RecommendationRoutes);
router.use('/schedule', ScheduleRoutes);
module.exports = router;