const router = require("express").Router();
const taskDates = require("../controllers/task.controllers")


router.get("/dates",taskDates.dates);



module.exports = router;