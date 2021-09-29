import { GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL } from "../actionTypes";

const initialState= {
    categories: [],
    loading: false,
}

export const categoriesReducer = (prevState = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_CATEGORIES_REQUEST:
            return {
                ...prevState,
                loading: true,
            }

        case GET_CATEGORIES_SUCCESS:
            return {
                ...prevState,
                categories: payload,
                loading: false
            }

        case GET_CATEGORIES_FAIL:
            return {
                ...prevState,
                error: payload,
                loading: false
            }  
  

        default:
            return prevState;
    }
}