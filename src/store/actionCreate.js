import {CHANGE_INPUT_VALUE,ADD_INPUT_TO_LIST,DELETE_ITEM} from './actionName'
export const getInputValue = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})
export const addInputValue = ()=>({
    type:ADD_INPUT_TO_LIST,
})
export const deleteItem = (value)=>({
    type:DELETE_ITEM,
    index:value
})