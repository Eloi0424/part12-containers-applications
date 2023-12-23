const statisticsRouter = require('express').Router();



statisticsRouter.get('/', async (req, res) => {
  res.send({
    "added_todos": 0
  });
});


module.exports = statisticsRouter;