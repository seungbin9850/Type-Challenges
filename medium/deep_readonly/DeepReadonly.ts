type DeepReadonly<T extends Record<any, any>> = { readonly [P in keyof T]: T[P] extends Record<any, any> ? DeepReadonly<T[P]> : T[P] };

type X = {
    x: {
        a: 1;
        b: "hi";
    };
    y: "hey";
};

type Expected = {
    readonly x: {
        readonly a: 1;
        readonly b: "hi";
    };
    readonly y: "hey";
};

type Todo = DeepReadonly<X>; // should be same as `Expected`

export {};
