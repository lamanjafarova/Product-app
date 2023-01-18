import axios from "axios"

export const getDataProductsActions = (name) => {
    return async (dispatch) => {
        dispatch({
            type: "GET_DATA_START"
        })
       try {
        let response = await axios.get("http://localhost:8000/products")

        dispatch({
            type: "GET_DATA_SUCCESS",
            payload: {data: response.data, name: name}
        })
        
       } catch (error) {
        dispatch({
            type: "GET_DATA_FAILED",
            payload: error,
        })
       }
    }
}
 export const addProductsAction = (values) => {
    return async (dispatch) => {
        await axios.post("http://localhost:8000/products", values)
        dispatch({
            type: "ADD_PRODUCTS",
        })
    }
 }
 export const deleteActions = (id) => {
    return async (dispatch) => {
        await axios.delete(`http://localhost:8000/products/${id}`);
        dispatch({
          type: "DELETE",
          payload: id,
        });
      };
 }
 export const sortedByPriceActions = (objData) => {
    return {
        type: "SORT_BY_PRICE",
        payload: objData
    }
 }
