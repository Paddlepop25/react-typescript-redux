import {
	ADD_GOAL,
	AddGoalAction,
	DISPLAY_GOALS,
	DisplayGoalsAction,
} from "./GoalTypes";
import { Dispatch } from "redux";

// action creator
// => ( { } ) because returning object so need to surround with ()
export const addGoalAction = (goal: string): AddGoalAction => ({
	type: ADD_GOAL,
	payload: goal,
});

/* 
THUNKS: action creators that return a function instead of action.
thunk can delay dispatch of an action or dispatch only if certain condition is met
inner function receives the store methods dispatch and getState as parameters
its an action creator that returns a fuction to perform asynchronous dispatch or conditional dispatch

below, the 2nd () will be postponed; will be executed when the function is dispatched
thunks are like regular action creators but instead of creating an object that 
will calculate the new value of state, thunks creates a function to access state, 
store data and dispatch new actions
*/

// action creator for displaying goals after thunk loadgoal function is triggered
const displayGoals = (goals: string[]): DisplayGoalsAction => ({
	type: DISPLAY_GOALS,
	payload: goals,
});

// redux thunks, return function not action creator ({})
export const saveGoals = () => async (dispatch: Dispatch, getState: any) => {
	const { goals } = getState().goals; // take note may or may not need destructuring in other versions
	console.log("goals ---> ", goals); // from state, should be ['abc', '123']

	// save to backend
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
