import React from "react";
import Header from "../Header";
import GoalInput from "./GoalInput";
import { useDispatch, useSelector } from "react-redux";
import { addGoalAction } from "../../store/Goals/GoalActions";
import { RootState } from "../../store/rootReducer";
import { Box } from "../../styles/styledTheme";

const Goals = () => {
	const goals = useSelector((state: RootState) => state.goals.goals);

	const dispatch = useDispatch();

	const addGoal = (goal: string) => {
		dispatch(addGoalAction(goal));
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
			</Box>
		</>
	);
};

export default Goals;
