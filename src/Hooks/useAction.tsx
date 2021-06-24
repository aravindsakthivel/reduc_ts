import { bindActionCreators } from "redux";
import { actionCreators } from "../State";
import { useDispatch } from "react-redux";

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};

export { useActions };
