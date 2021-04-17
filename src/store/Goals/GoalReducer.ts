// in redux, reducers are pure functions that calculate the new value of state

import { GoalTypes, ADD_GOAL, DISPLAY_GOALS } from "./GoalTypes";

// state = previous state
// action = event containing the data to calculate the new state
// this reducer returns the new state value
export interface GoalState {
	goals: string[];
}

const initialState = {
	goals: [],
};

// action type must be combination of actions because there are a few cases, do different things
const goalReducer = (state: GoalState = initialState, action: GoalTypes) => {
	switch (action.type) {
		case ADD_GOAL: {
			return {
				...state,
				goals: [...state.goals, action.payload], // add new note
			};
		}
		case DISPLAY_GOALS: {
			return {
				...state,
				goals: action.payload,
			};
		}
		default:
			return state;
	}
};

export default goalReducer;
