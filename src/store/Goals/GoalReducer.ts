import { GoalTypes, ADD_GOAL, DISPLAY_GOALS } from "./GoalTypes";

interface GoalState {
	goals: string[];
}

const initialState = {
	goals: [],
};

const goalReducer = (state: GoalState = initialState, action: GoalTypes) => {
	switch (action.type) {
		case ADD_GOAL: {
			return {
				...state,
				goals: [...state.goals, action.payload],
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
