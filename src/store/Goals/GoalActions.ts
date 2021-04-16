import { ADD_GOAL } from "./GoalTypes";

export const addGoalAction = (goal: string) => ({
	type: ADD_GOAL,
	payload: goal,
});
