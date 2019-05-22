import vue from 'vue'

vue.config.productionTip = false

export const createDispatchers = <States, Getters, Mutations>(
  states: States,
  mutations: (_: States) => { getters: Getters; mutations: Mutations },
) => {
  const v = vue.observable(states)
  return {
    states: v as Readonly<States>,
    ...mutations(v),
  }
}

export const createStore = <States, Getters, Actions>({
  states,
  getters,
  actions,
}: {
  states: States
  getters: Getters
  actions: Actions
}) => {
  return { states, getters, actions }
}
