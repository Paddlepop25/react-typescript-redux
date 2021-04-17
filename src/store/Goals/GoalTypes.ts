export const ADD_GOAL = "ADD_GOAL";
export const DISPLAY_GOALS = "DISPLAY_GOALS";

export type AddGoalAction = {
	type: typeof ADD_GOAL;
	payload: string;
};

export type DisplayGoalsAction = {
	type: typeof DISPLAY_GOALS;
	payload: string[];
};

// combine different actions
export type GoalTypes = AddGoalAction | DisplayGoalsAction;
