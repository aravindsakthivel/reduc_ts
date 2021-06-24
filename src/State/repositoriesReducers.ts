import { repoConstant } from "./actionTypes";
import { Action } from "./actionInterfaces";

interface RepositoriesState {
  error: string | null;
  loading: boolean;
  data: string[];
}

const initState: RepositoriesState = {
  error: null,
  loading: false,
  data: [],
};

const repoReducer = (
  state: RepositoriesState = initState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case repoConstant.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case repoConstant.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case repoConstant.SEARCH_REPOSITORIES_FAILURE:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export { repoReducer };
