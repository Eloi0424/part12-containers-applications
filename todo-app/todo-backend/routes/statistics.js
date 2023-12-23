const statisticsRouter = require('express').Router();
const redis = require("../redis");


statisticsRouter.get('/', async (req, res) => {
  const counter = await redis.getAsync('counter');
  res.send({
    "added_todos": counter
  });
});


module.exports = statisticsRouter;