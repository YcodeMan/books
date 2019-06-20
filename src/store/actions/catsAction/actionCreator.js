import {catsActionType} from './actionTypes'
import {getCategory} from '@api/api'

export const actionCategory = ()=> async (dispatch)=>{
    let data = await getCategory();
    return dispatch({
        type:catsActionType,
        value:data
    })
}