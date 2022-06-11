import { ActionType } from '../action-types'
import { SearchQueryChangeAction } from '../actions'

const initialSearchQuery = ''

const searchQueryReducer = (state: string = initialSearchQuery, action: SearchQueryChangeAction) => {
  switch (action.type) {
  case ActionType.SET_SEARCH_QUERY:
    return action.payload
  default:
    return state
  }
}

export default searchQueryReducer