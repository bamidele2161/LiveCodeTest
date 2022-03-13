import * as types from "./actionType";
import axios from 'axios';

const getTasks = (tasks: any) => ({
    type: types.GET_TODO,
    payload: tasks,
});

const taskDeleted = (id: any) => ({
    type: types.DELETE_TODO,
    payload: id,
})

const taskAdded = (task: any) => ({
    type: types.ADD_TODO,
    payload: task,
})


export const loadTasks = () => {
    return function (dispatch: any) {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((response) => {
            console.log("response", response);
            dispatch(getTasks(response.data));
      })
        .catch((error) => {
            console.log(error);
        });
    };
};
    
export const deleteTask = (id: any) => {
    return function (dispatch: any) {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => {
            console.log("response", response);
            dispatch(taskDeleted(id));
        })
        .catch((error) => {
            console.log(error)
        });
    };
};

export const addTask = (task: any) => {
    return function (dispatch: any) {
        axios.post(`https://jsonplaceholder.typicode.com/todos`, task)
        .then((response) => {
            console.log("response", response);
            dispatch(taskAdded(response.data));
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
