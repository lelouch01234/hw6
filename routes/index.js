var express = require('express');
var router = express.Router();

var Exercise = require("../models/exercise");
/* GET home page. */
router.get('/', async function(req, res, next) {
  const exercises = await Exercise.findAll();
  // console.log(exercises)
  res.render("index", { exercises });
});

router.post("/add", async function (req, res) {
  var { name, reps, weight, date, unit } = req.body;
  // console.log(name, reps, weight, date, unit)
  await Exercise.create({
    name, reps, weight, date, unit
  });
  const exercises = await Exercise.findAll();
  res.json(exercises);
});
router.get("/delete", async function (req, res) {
  var id = req.query.id;
  await Exercise.destroy({
    where: {
      id
    }
  });

  res.redirect("/");
});
// GET update page
router.get("/update", async function (req, res) {
  var id = req.query.id;
  var exercise = await Exercise.findOne({
    where: {
      id
    }
  });
  res.render("update", { exercise });
});
// POST update person method
router.post("/update", async function (req, res) {
  var { id, name, reps, weight, date, unit } = req.body;
  await Exercise.update(
    {
      name, reps, weight, date, unit
    },
    { where: { id } }
  );
  res.redirect("/");
});
module.exports = router;
