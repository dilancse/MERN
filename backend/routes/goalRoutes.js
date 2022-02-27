const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

//router.get("/", getGoals);
//router.post("/", setGoal);
//router.put("/:id", updateGoal);
//router.delete("/:id", deleteGoal);

router.route('/').get(getGoals).post(setGoal); // similar function achived as in line 10 and 11
router.route('/:id').put(updateGoal).delete(deleteGoal); // similar function achived as in line 12 and 13

module.exports = router;
