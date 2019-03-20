import { createStore } from 'redux'

import { rootReducer, initialState } from './reduser'

export const store = createStore(rootReducer, initialState)