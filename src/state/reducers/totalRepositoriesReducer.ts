import { ActionType } from '../action-types'
import { totalRepositoriesChangeAction } from '../actions'

const initialtotalRepositories = 0

const totalRepositoriesReducer = (state: number = initialtotalRepositories, action: totalRepositoriesChangeAction) => {
  switch (action.type) {
  case ActionType.SET_TOTAL_REPOSITORIES:
    return action.payload
  default:
    return state
  }
}

export default totalRepositoriesReducer