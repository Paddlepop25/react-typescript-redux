import { AddGoalAction, ADD_GOAL } from "./GoalTypes";

interface GoalState {
	goals: string[];
}

const initialState = {
	goals: [],
};

const goalReducer = (
	state: GoalState = initialState,
	action: AddGoalAction
) => {
	switch (action.type) {
		case ADD_GOAL: {
			return {
				...state,
				goals: [...state.goals, action.payload],
			};
		}
		default:
			return state;
	}
};

export default goalReducer;
