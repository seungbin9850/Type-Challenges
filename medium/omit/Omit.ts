type MyOmit<T extends Record<any, any>, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] };

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
    completed: false,
};
