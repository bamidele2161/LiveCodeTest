import * as types from './actionType'

const initialState = {
    tasks: [],
    task: {},
    loading: false
}

const tasksReducers = (state = initialState, action: any) => {
    switch(action.type) {
        case types.GET_TODO:
            return { 
                ...state,
                tasks: action.payload,
                loading: false,
            };
        case types.DELETE_TODO:
            return{
                ...state,
                loading: false,
                tasks: state.tasks.filter((item: any) => item.id !== action.payload),
            }
        case types.ADD_TODO:
            return{
                ...state,
                tasks: state.tasks.concat(action.payload),
                loading: false,
            }
        default:
            return state;
    }
};

export default tasksReducers;