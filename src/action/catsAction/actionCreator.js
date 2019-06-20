import {catsAction} from './actionTypes'
import {getTitleClass} from '@api/api'

export const categoryAction = ()=> async (dispatch)=>{
    let data = await getTitleClass();
    return dispatch({
        type:catsAction,
        value:data
    })
}