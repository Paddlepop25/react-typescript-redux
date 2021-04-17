import { call, put, takeLatest } from "redux-saga/effects";
import { saveGoalsAPI, loadGoalsAPI } from "./GoalAPI";
import {
	SAVE_GOALS_TO_DB,
	SaveGoalsAction,
	LOAD_GOALS_FROM_DB,
} from "./GoalTypes";
import { displayGoals } from "./GoalActions";

/* 
sagas are based on generators so cannot use async await here
instead, use combination of saga effects like to perform another request, use yield call
*/

function* saveGoalsToDBFlow(action: SaveGoalsAction) {
	yield call(saveGoalsAPI, action.payload);
}

// watches for type in actions
// export all saga functions to be grouped in rootSaga
export function* saveGoalsToDBSagaWatcher() {
	yield takeLatest(SAVE_GOALS_TO_DB, saveGoalsToDBFlow);
}

// get data from backend (make api call in goalAPI.ts)
function* loadGoalsFromDBFlow(): any {
	const goals = yield call(loadGoalsAPI);
	yield put(displayGoals(goals)); // // dispatch another action (see GoalAction.ts) to update state with notes
}

export function* loadGoalsFromDBSagaWatcher() {
	yield takeLatest(LOAD_GOALS_FROM_DB, loadGoalsFromDBFlow);
}

/**
 * fork - copy
 * takeLatest - take latest action type
 * call - point to function to make api call
 * put - like dispatch action
 */
