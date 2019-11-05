import {
    getHotBloodBooks,
    getLaughBooks,
    getLoveBooks,
    getMagicBooks,
    } from '@api/api'
import {
        getHotBloodBooksType,
        getLaughBooksType,
        getLoveBooksType,
        getMagicBooksType
    } from './actionType'


// 获取都热血类漫画
export const actiongetHotBloodBooks = () => 
    async dispatch => {
        let data = await getHotBloodBooks()
            data = data.books
        dispatch({
            type: getHotBloodBooksType,
            value: data
        })
    }

// 获取搞笑类漫画
export const actiongetAllLaughBooks = () => 
    async dispatch => {
        let data = await getLaughBooks()
            data = data.books
        dispatch({
            type: getLaughBooksType,
            value: data
        })
    }

// 获取恋爱类漫画
export const actiongetAllLoveBooks = () => 
    async dispatch => {
        let data = await getLoveBooks()
            data = data.books
        dispatch({
            type: getLoveBooksType,
            value: data
        })
    }

    // 获取魔幻类漫画
export const actiongetAllMagicBooks = () => 
async dispatch => {
    let data = await getMagicBooks()
        data = data.books
    dispatch({
        type: getMagicBooksType,
        value: data
    })
}

 


       

