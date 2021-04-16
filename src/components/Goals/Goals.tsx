import React from "react";
import Header from "../Header";
import GoalInput from "./GoalInput";
import { useDispatch } from "react-redux";
import { addGoalAction } from "../../store/Goals/GoalActions";

const Goals = () => {
	const dispatch = useDispatch();

	const addGoal = (goal: string) => {
		dispatch(addGoalAction(goal));
	};

	return (
		<>
			<Header />
			<GoalInput addGoal={addGoal} />
			<ul>
				<li>goal 🍫</li>
			</ul>
		</>
	);
};

export default Goals;
