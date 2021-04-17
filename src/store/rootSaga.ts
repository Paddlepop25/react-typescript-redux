// https://redux-saga.js.org/docs/introduction/BeginnerTutorial/
// function* --> generator functions

// rootSaga - entry point to start all Sagas at once
import { fork } from "@redux-saga/core/effects";

// combine all sagas
import {
	saveGoalsToDBSagaWatcher,
	loadGoalsFromDBSagaWatcher,
} from "./Goals/GoalSagas";

// fork is like copying from the saga function
function* rootSaga() {
	yield fork(saveGoalsToDBSagaWatcher);
	yield fork(loadGoalsFromDBSagaWatcher);
}

// export all sagas as one rootSaga
export default rootSaga;
