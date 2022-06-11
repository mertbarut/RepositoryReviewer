import { ActionType } from '../action-types'
import { Dispatch } from 'redux'
import { PageChangeAction, totalRepositoriesChangeAction, SearchQueryChangeAction } from '../actions'

/**
 * Returns a dispatch function that increases the current page by
 * amount given as parameter.
 * @return Dispatch function.
 * @param {number} amount Number to increase the page count.
 */
export const goToNextPage = (amount: number) => {
  return (dispatch: Dispatch<PageChangeAction>) => {
    dispatch({
      type: ActionType.NEXT,
      payload: amount
    })
  }
}

/**
 * Returns a dispatch function that decreases the current page by
 * amount given as parameter.
 * @return Dispatch function.
 * @param {number} amount Number to decrease the page count.
 */
export const goToPrevPage = (amount: number) => {
  return (dispatch: Dispatch<PageChangeAction>) => {
    dispatch({
      type: ActionType.PREV,
      payload: amount
    })
  }
}

/**
 * Returns a dispatch function that sets the current page to 1.
 * @return Dispatch function.
 */
export const goToFirstPage = () => {
  return (dispatch: Dispatch<PageChangeAction>) => {
    dispatch({
      type: ActionType.FIRST,
    })
  }
}

/**
 * Returns a dispatch function that sets the redux state "totalRepositories" to
 * the number given as parameter.
 *
 * @return Dispatch function.
 * @param {number} total Number to set the redux state "totalRepositories".
 */
export const setTotalRepositories = (total: number) => {
  return (dispatch: Dispatch<totalRepositoriesChangeAction>) => {
    dispatch({
      type: ActionType.SET_TOTAL_REPOSITORIES,
      payload: total
    })
  }
}

/**
 * Returns a dispatch function that sets the redux state "searchQuery" to
 * the string given as parameter.
 *
 * @return Dispatch function.
 * @param {string} query String to update the redux state "searchQuery" with.
 */
export const setSearchQuery = (query: string) => {
  return (dispatch: Dispatch<SearchQueryChangeAction>) => {
    dispatch({
      type: ActionType.SET_SEARCH_QUERY,
      payload: query
    })
  }
}
