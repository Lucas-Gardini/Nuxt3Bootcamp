export interface ITodo {
	id: string;
	item: string;
	completed: boolean;
}

export const db = {
	todos: Array<ITodo>(),
};
