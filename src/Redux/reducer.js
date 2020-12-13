import { ADD_TODO, TOGGLE_TASK, CLEAR_ALL, COMPLETED_TASK } from './actionType'
import { saveData, loadData, removeData } from "./localStorage";


export const initState = {
    todo: loadData("todoTasks") || [],
    completedTodo: loadData("completedTasks") || []
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            saveData("todoTasks", [...state.todo, payload])
            return {
                ...state,
                todo: [...state.todo, payload]
            }

        case COMPLETED_TASK:
            let findTask = state.todo.find((item) => item.id === payload.id)
            let filterTask = state.todo.filter(item => item.id !== payload.id)
            console.log(findTask)
            saveData("completedTasks", [...state.completedTodo, payload])
            saveData("todoTasks", filterTask)

            return {
                ...state,
                todo: state.todo.filter(item => item.id !== payload.id),
                completedTodo: [...state.completedTodo, payload]
            }

        case TOGGLE_TASK:
            let findItem = state.todo.find((item) => item.id === payload)
            findItem.status = !findItem.status
            return {
                ...state,
                todo: state.todo.filter(item => item.id === payload ? findItem : item),
            }

        case CLEAR_ALL:
            removeData("todoTasks");
            removeData("completedTasks");
            return {
                ...state
            };

        default:
            return state
    }
}
