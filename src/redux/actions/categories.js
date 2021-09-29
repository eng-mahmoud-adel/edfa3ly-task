import request from "../../api";
import { GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL } from "../actionTypes";

export const getCategories = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_CATEGORIES_REQUEST
        });

        const {data} = await request('/category');

        dispatch({
            type: GET_CATEGORIES_SUCCESS,
            payload: data,
        });

        

    } catch (error) {
        console.log(error.response.data);
        dispatch({
            type: GET_CATEGORIES_FAIL,
            payload: error.response.data
        })
    }
}