import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

// run all sagas
sagaMiddleware.run(rootSaga);

export default store;
