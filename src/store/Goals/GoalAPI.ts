// sagas are based on generators (function* ) so cannot use async await. yield call will call these functions below to call from backend

export const saveGoalsAPI = async (goals: string[]) => {
	await fetch("http://localhost:4000/savegoals", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(goals),
	});
};

export const loadGoalsAPI = async () => {
	return await fetch("http://localhost:4000/getgoals").then((res) =>
		res.json()
	);
};
