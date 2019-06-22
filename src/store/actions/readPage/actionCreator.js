import {
    getReadList,
    getReadContent
    } from '@api/api'
import {
    getReadListType,
    getReadContentType,
    } from './actionType'


// 获取小说章节
export const actiongetBooksList = () => 
    async dispatch => {
        let data = await getReadList()
            // data = data.books
        dispatch({
            type: getReadListType,
            value: data
        })
    }
    // 获取小说内容
export const actiongetBooksContent = () => 
async dispatch => {
    let data = await getReadContent()
        // data = data.books
    dispatch({
        type: getReadContentType,
        value: data
    })
}




       

