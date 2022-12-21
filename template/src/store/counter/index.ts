import { createEvent, createStore } from 'effector'

export const $counterStore = createStore(0)

export const increaseCounter = createEvent()
export const decreaseCounter = createEvent()
