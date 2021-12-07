import {
  ADD_ITEM,
  GET_LIST_ITEMS_FAILED,
  GET_LIST_ITEMS_START,
  GET_LIST_ITEMS_SUCCESS,
} from "./constant";

const items = (
  state = {
    isLoading: false,
    data: [],
    error: "",
  },
  actions
) => {
  switch (actions.type) {
    case GET_LIST_ITEMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LIST_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: actions.payload,
      };
    case GET_LIST_ITEMS_FAILED:
      return state.error;
    case ADD_ITEM:
      return {
        ...state,
        data: [actions.payload, ...state.data],
      };
    default:
      return state;
  }
};

export default items;
