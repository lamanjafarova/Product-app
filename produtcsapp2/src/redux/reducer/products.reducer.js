let InitialState =  {
    loading: true,
    data: undefined,
    error: undefined
}
export const productsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "GET_DATA_START":
            return {...state, loading: true}
        case "GET_DATA_SUCCESS":
            return {...state, loading: false, data: action.payload.data.filter(q=>q.name.toLowerCase().includes(action.payload.name.toLowerCase()))}
        case "GET_DATA_FAILED":
            return {...state, error: action.payload, loading: false}
        case "DELETE":
            return {
        ...state,
        data: state.data.filter((q) => q._id !== action.payload),
      };
            
            
            
    
        default:
           return state
    }
}