import { ADD_TODO, TOGGLE_TASK, CLEAR_ALL, COMPLETED_TASK } from './actionType'
import { v4 as uuid } from 'uuid'

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload: {
        id: uuid(),
        title: payload,
        status: false
    }
})

export const completedTask = (payload) => ({
    type: COMPLETED_TASK,
    payload: {
        id: payload.id,
        title: payload.title,
        status: true
    }
})

export const toggleTask = (payload) => ({
    type: TOGGLE_TASK,
    payload
})

export const clearAll = (payload) => ({
    type: CLEAR_ALL,
    payload
})