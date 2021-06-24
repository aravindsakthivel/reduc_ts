import { repoConstant } from "./actionTypes";
import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "./actionInterfaces";

const searchRepoProcess =
  (term: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: repoConstant.SEARCH_REPOSITORIES,
    });
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: { text: term },
        }
      );
      const names: string[] = data.objects.map(
        (result: any) => result.package.name
      );
      dispatch({
        type: repoConstant.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: repoConstant.SEARCH_REPOSITORIES_FAILURE,
        payload: error.message,
      });
    }
  };

export { searchRepoProcess };
