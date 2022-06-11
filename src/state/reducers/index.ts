import { combineReducers } from 'redux'
import pageReducer from '../reducers/pageReducer'
import searchQueryReducer from './searchQueryReducer'
import totalRepositoriesReducer from './totalRepositoriesReducer'

const reducers = combineReducers({
  page: pageReducer,
  totalRepositories: totalRepositoriesReducer,
  searchQuery: searchQueryReducer
})

export default reducers

export type State = ReturnType<typeof reducers>