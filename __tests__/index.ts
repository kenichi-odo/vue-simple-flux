import { createDispatchers, createStore } from '../src/index'

test('Normal', () => {
  const d = createDispatchers({ text: 'test' }, () => ({ mutations: {}, getters: {} }))
  expect(d).toEqual({ getters: {}, mutations: {}, states: { text: 'test' } })

  const actions = {
    testAction() {},
  }

  const { states, getters } = d
  expect(createStore({ states, getters, actions })).toEqual({
    states: { text: 'test' },
    getters: {},
    actions: expect.anything(),
  })
})
