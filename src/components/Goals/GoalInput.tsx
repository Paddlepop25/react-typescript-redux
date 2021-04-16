import React from "react";

interface GoalInputProps {
	addGoal: (goal: string) => void;
}

const GoalInput: React.FC<GoalInputProps> = ({ addGoal }) => {
	const [goal, setGoal] = React.useState("");

	const handleGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGoal(event.target.value);
	};

	const handleGoalAdd = () => {
		addGoal(goal);
		setGoal("");
	};

	return (
		<>
			<input
				value={goal}
				onChange={handleGoalChange}
				type='text'
				placeholder='enter a goal...'
			/>
			&nbsp;
			<button onClick={handleGoalAdd} type='button'>
				Add goal
			</button>
			<hr />
		</>
	);
};

export default GoalInput;
