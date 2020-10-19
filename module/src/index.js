var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import vue from 'vue';
vue.config.productionTip = false;
export var createDispatchers = function (states, mutations) {
    var v = vue.observable(states);
    return __assign({ states: v }, mutations(v));
};
export var createStore = function (_a) {
    var states = _a.states, getters = _a.getters, actions = _a.actions;
    return { states: states, getters: getters, actions: actions };
};
//# sourceMappingURL=index.js.map