import {subjectListType} from './actionType'
import {getSubjectList} from '@api/api'

export const actionSubjectList = (parm)=> async (dispatch)=>{
    let data = await getSubjectList(parm);
    console.log(data)
    return dispatch({
        type:subjectListType,
        value:data
    })
}