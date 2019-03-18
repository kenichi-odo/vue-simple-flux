import vue from 'vue'

vue.config.productionTip = false

export const createDispatchers = <States, Getters, Mutations>(
  states: States,
  mutations: (_: States) => { getters: Getters; mutations: Mutations },
) => {
  const v = new vue({ data: () => states })
  return { states: v.$data as Readonly<States>, ...mutations(v.$data as States) }
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
