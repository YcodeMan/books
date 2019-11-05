import {subjectListType} from './actionType'
import {getSubjectList} from '@api/api'

export const actionSubjectList = (parm)=> async (dispatch)=>{
    let data = await getSubjectList(parm);
    return dispatch({
        type:subjectListType,
        value:data
    })
}