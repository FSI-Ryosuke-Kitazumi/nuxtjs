import { todos } from "./api/todos";
import { users } from "./api/user";

export const handlers = [...users, ...todos];
