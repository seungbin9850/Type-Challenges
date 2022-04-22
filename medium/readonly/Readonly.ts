type MyReadonly2<T extends Record<any, any>, K extends keyof T = keyof T> = {
    readonly [P in K]: T[P];
} & Omit<T, K>;

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

const todo: MyReadonly2<Todo, "title" | "description"> = {
    title: "Hey",
    description: "foobar",
    completed: false,
};

// todo.title = "Hello"; // Error: cannot reassign a readonly property
// todo.description = "barFoo"; // Error: cannot reassign a readonly property
// todo.completed = true; // OK

export {};
