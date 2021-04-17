import React from "react";
import Header from "../Header";
import GoalInput from "./GoalInput";
import { useDispatch, useSelector } from "react-redux";
import {
	addGoalAction,
	loadGoals,
	saveGoals,
} from "../../store/Goals/GoalActions";
import { RootState } from "../../store/rootReducer";
import { Box } from "../../styles/styledTheme";

const Goals = () => {
	const goals = useSelector((state: RootState) => state.goals.goals);
	console.log("goals --->", goals); // should be ['1ststring', '2ndstring']

	const dispatch = useDispatch();

	const addGoal = (goal: string) => {
		dispatch(addGoalAction(goal));
	};

	const handleGoalsSave = () => {
		dispatch(saveGoals(goals));
		alert("goals have been saved 💌");
	};

	const handleGoalsLoad = () => {
		dispatch(loadGoals());
	};

	return (
		<>
			<Header />
			<Box>
				<h3>What are your goals this year?</h3>
				<GoalInput addGoal={addGoal} />
				<ul>
					{goals.map((goal, index) => {
						return <li key={goal + index}>{goal}</li>;
					})}
				</ul>
				<button onClick={handleGoalsSave}>Save goals to database</button>&nbsp;
				<button onClick={handleGoalsLoad}>Load goals from database</button>
			</Box>
		</>
	);
};

export default Goals;
