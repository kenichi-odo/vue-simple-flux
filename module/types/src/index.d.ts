export declare const createDispatchers: <States, Getters, Mutations>(states: States, mutations: (_: States) => {
    getters: Getters;
    mutations: Mutations;
}) => {
    getters: Getters;
    mutations: Mutations;
    states: Readonly<States>;
};
export declare const createStore: <States, Getters, Actions>({ states, getters, actions, }: {
    states: States;
    getters: Getters;
    actions: Actions;
}) => {
    states: States;
    getters: Getters;
    actions: Actions;
};
//# sourceMappingURL=index.d.ts.map