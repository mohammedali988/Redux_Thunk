import { get } from "../../Api";
import {
  GET_LIST_ITEMS_FAILED,
  GET_LIST_ITEMS_START,
  GET_LIST_ITEMS_SUCCESS,
  ADD_ITEM,
} from "./constant";

export const getItems = () => async (dispatch) => {
  dispatch({
    type: GET_LIST_ITEMS_START,
  });
  get("/todos")
    .then((res) =>
      dispatch({
        type: GET_LIST_ITEMS_SUCCESS,
        payload: res.data.slice(0,20),
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_LIST_ITEMS_FAILED,
        payload: err.massege,
      })
    );
};

export const addItem = (obj) => async (dispatch) => {
    dispatch({
        type:ADD_ITEM,
        payload:obj
    })
}
