import {subjectListType} from './actionType'
import {getSubjectList} from '@api/api'

export const actionSubjectList = ()=> async (dispatch)=>{
    let data = await getSubjectList();
    console.log(data)
    return dispatch({
        type:subjectListType,
        value:data
    })
}