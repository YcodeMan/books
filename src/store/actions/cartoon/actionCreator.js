import {
    getHotBloodBooks,
    } from '@api/api'
import {
        getHotBloodBooksType,
    } from './actionType'


// 获取都市连载类
export const actiongetHotBloodBooks = () => 
    async dispatch => {
        let data = await getHotBloodBooks()
            data = data.books
        dispatch({
            type: getHotBloodBooksType,
            value: data
        })
    }


 


       

