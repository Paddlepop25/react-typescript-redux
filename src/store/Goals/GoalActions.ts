import {
	ADD_GOAL,
	AddGoalAction,
	DISPLAY_GOALS,
	DisplayGoalsAction,
	SAVE_GOALS_TO_DB,
	SaveGoalsAction,
	LOAD_GOALS_FROM_DB,
	LoadGoalsAction,
} from "./GoalTypes";

// => ( { } ) because returning object so need to surround with ()
export const addGoalAction = (goal: string): AddGoalAction => ({
	type: ADD_GOAL,
	payload: goal,
});

export const displayGoals = (goals: string[]): DisplayGoalsAction => ({
	type: DISPLAY_GOALS,
	payload: goals,
});

export const saveGoals = (goals: string[]): SaveGoalsAction => ({
	type: SAVE_GOALS_TO_DB,
	payload: goals,
});

export const loadGoals = (): LoadGoalsAction => ({
	type: LOAD_GOALS_FROM_DB,
});
