type MyReturnType<T extends (...param: any) => any> = T extends (...param: any) => infer K ? K : never;

const fn = (v: boolean) => {
    if (v) return 1;
    else return 2;
};

type a = MyReturnType<typeof fn>; // should be "1 | 2"
