import request from "../../api";
import { GET_PRODUCTS_BY_CATEGORY_REQUEST, GET_PRODUCTS_BY_CATEGORY_SUCCESS, GET_PRODUCTS_BY_CATEGORY_FAIL, FILTER_PRODUCT_REQUEST, FILTER_PRODUCT_SUCCESS, FILTER_PRODUCT_FAIL } from "../actionTypes";

export const getProductsByCategory = (categoryId) => async (dispatch) => {
    try {
        dispatch({
            type: GET_PRODUCTS_BY_CATEGORY_REQUEST
        });

        const {data} = await request('/product', {
            params: {
                categoryId
            }
        });

        dispatch({
            type: GET_PRODUCTS_BY_CATEGORY_SUCCESS,
            payload: data,
        });

        

    } catch (error) {
        console.log(error.response.data);
        dispatch({
            type: GET_PRODUCTS_BY_CATEGORY_FAIL,
            payload: error.response.data
        })
    }
}

export const filterProducts = (categoryId, minPrice, maxPrice, color, rating) => async (dispatch) => {
    try {
        dispatch({
            type: FILTER_PRODUCT_REQUEST
        });

        const {data} = await request('/product', {
            params: {
                categoryId,
                price_lte: maxPrice,
                price_gte: minPrice,
                color,
                rating
            }
        });

        dispatch({
            type: FILTER_PRODUCT_SUCCESS,
            payload: data,
        });

        

    } catch (error) {
        console.log(error.response.data);
        dispatch({
            type: FILTER_PRODUCT_FAIL,
            payload: error.response.data
        })
    }
}