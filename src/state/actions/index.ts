import { ActionType } from '../action-types'

/* Pagination */

interface NextPageAction {
  type: ActionType.NEXT
  payload: number
}

interface PreviousPageAction {
  type: ActionType.PREV
  payload: number
}

interface FirstPageAction {
  type: ActionType.FIRST
}

/* Repositories */

interface SetTotalRepositoriesAction {
  type: ActionType.SET_TOTAL_REPOSITORIES
  payload: number
}

interface SetDisplayedUserAction {
  type: ActionType.SET_NEW_USER,
  payload: User
}

interface setSearchQuery {
  type: ActionType.SET_SEARCH_QUERY,
  payload: string
}

export type PageChangeAction = NextPageAction | PreviousPageAction | FirstPageAction

export type totalRepositoriesChangeAction = SetTotalRepositoriesAction

export type DisplayedUserChangeAction = SetDisplayedUserAction

export type SearchQueryChangeAction = setSearchQuery