import { createDispatchers, createStore } from '../src/index';
test('Normal', function () {
    var d = createDispatchers({ text: 'test' }, function () { return ({ mutations: {}, getters: {} }); });
    expect(d).toEqual({ getters: {}, mutations: {}, states: { text: 'test' } });
    var actions = {
        testAction: function () { },
    };
    var states = d.states, getters = d.getters;
    expect(createStore({ states: states, getters: getters, actions: actions })).toEqual({
        states: { text: 'test' },
        getters: {},
        actions: expect.anything(),
    });
});
//# sourceMappingURL=index.js.map