//@desc     Get goals
//@route    GET /api/goals
//@access   Private
const getGoals = async (req, res, next) => {
  res.status(200).json({ message: "Get goals" });
};

//@desc     Set goal
//@route    POST /api/goals
//@access   Private
const setGoal = async (req, res, next) => {
   //check for goal text avilable
   if(!req.body.goal){
    res.status(400)
    throw new Error('goal field missing in body request')
   }

  res.status(200).json({ message: "Set goals" });
};

//@desc     Update goal
//@route    PUT /api/goals/:id
//@access   Private
const updateGoal = async (req, res, next) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

//@desc     Delete goal
//@route    DELETE /api/goals/:id
//@access   Private
const deleteGoal = async (req, res, next) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
