import {
	ADD_GOAL,
	AddGoalAction,
	DISPLAY_GOALS,
	DisplayGoalsAction,
} from "./GoalTypes";
import { Dispatch } from "redux";

export const addGoalAction = (goal: string): AddGoalAction => ({
	type: ADD_GOAL,
	payload: goal,
});

const displayGoals = (goals: string[]): DisplayGoalsAction => ({
	type: DISPLAY_GOALS,
	payload: goals,
});

export const saveGoals = () => async (dispatch: Dispatch, getState: any) => {
	const { goals } = getState().goals;
	console.log("goals ---> ", goals); // should be ['abc', '123']
	await fetch("http://localhost:4000/savegoals", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(goals),
	});
	alert("Goals have been added 💌");
};

export const loadGoals = () => async (dispatch: Dispatch, getState: any) => {
	const goals = await fetch("http://localhost:4000/getgoals").then((res) =>
		res.json()
	);
	console.log(goals);
	dispatch(displayGoals(goals)); // overwrite existing goals
};
