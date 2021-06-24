import { repoConstant } from "./actionTypes";

interface SearchRepositoriesAction {
  type: repoConstant.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesActionSuccess {
  type: repoConstant.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesActionFailure {
  type: repoConstant.SEARCH_REPOSITORIES_FAILURE;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesActionSuccess
  | SearchRepositoriesActionFailure;
