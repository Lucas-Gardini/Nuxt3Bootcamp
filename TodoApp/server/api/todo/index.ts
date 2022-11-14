import { db, ITodo } from "@/server/db";
import { v4 } from "uuid";
import { H3Event } from "h3";

export default defineEventHandler(async (e): Promise<any> => {
	if (e.req.method === "GET") return await GET();
	if (e.req.method === "POST") return await POST(e);
});

const GET = () => {
	return db.todos;
};
const POST = async (event: H3Event) => {
	const body = await useBody(event);

	if (!body) return { status: 400 };
	if (!body.item) return { status: 400 };

	const newTodo: ITodo = {
		id: v4(),
		item: body.item,
		completed: false,
	};

	db.todos.push(newTodo);

	return { status: 201, body: newTodo };
};
