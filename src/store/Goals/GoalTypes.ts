export const ADD_GOAL = "ADD_GOAL";
export const DISPLAY_GOALS = "DISPLAY_GOALS";
export const SAVE_GOALS_TO_DB = "SAVE_GOALS_TO_DB";
export const LOAD_GOALS_FROM_DB = "LOAD_GOALS_FROM_DB";

export type AddGoalAction = {
	type: typeof ADD_GOAL;
	payload: string;
};

export type DisplayGoalsAction = {
	type: typeof DISPLAY_GOALS;
	payload: string[];
};

export type GoalTypes = AddGoalAction | DisplayGoalsAction;

export type SaveGoalsAction = {
	type: typeof SAVE_GOALS_TO_DB;
	payload: string[];
};

export type LoadGoalsAction = {
	type: typeof LOAD_GOALS_FROM_DB;
};
