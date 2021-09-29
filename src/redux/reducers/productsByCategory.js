import { GET_PRODUCTS_BY_CATEGORY_REQUEST, GET_PRODUCTS_BY_CATEGORY_SUCCESS, GET_PRODUCTS_BY_CATEGORY_FAIL, FILTER_PRODUCT_REQUEST, FILTER_PRODUCT_SUCCESS, FILTER_PRODUCT_FAIL } from "../actionTypes";

const initialState= {
    products: [],
    loading: false,
}

export const productsByCategoryReducer = (prevState = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_PRODUCTS_BY_CATEGORY_REQUEST:
        case FILTER_PRODUCT_REQUEST:
            return {
                ...prevState,
                loading: true,
            }

        case GET_PRODUCTS_BY_CATEGORY_SUCCESS:
        case FILTER_PRODUCT_SUCCESS:
            return {
                ...prevState,
                products: payload,
                loading: false
            }

        case GET_PRODUCTS_BY_CATEGORY_FAIL:
        case FILTER_PRODUCT_FAIL:
            return {
                ...prevState,
                error: payload,
                loading: false
            }  
  

        default:
            return prevState;
    }
}