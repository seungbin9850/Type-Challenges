type MyAwaited<T> = T extends undefined ? T : T extends Promise<infer K> ? MyAwaited<K> : T;
