import {
        getAllBooks,
        getQhuanBooks,
        getXxiaBooks,
        getSchoolBooks,
        getGhotBooks,
        getGfinishingBooks,


    } from '@api/api'
import {
        getAllBooksType,
        getQhuanBooksType,
        getXxiaBooksType,
        getSchoolBooksType,
        getGhotBooksType,
        getGfinishingBooksType,

    } from './actionType'


// 获取都市连载类
export const actiongetAllBooks = () => 
    async dispatch => {
        let data = await getAllBooks()
            data = data.books
        dispatch({
            type: getAllBooksType,
            value: data
        })
    }

// 取奇幻完结所有书籍
export const actiongetQhuanBooks = () => 
    async dispatch => {
        let data = await getQhuanBooks()
            data = data.books
        dispatch({
            type: getQhuanBooksType,
            value: data
        })
    }
   
// 获取仙侠完结所有书籍
export const actiongetXxiaBooks = () => 
    async dispatch => {
        let data = await getXxiaBooks()
            data = data.books
       
        dispatch({
            type: getXxiaBooksType,
            value: data
        })
    }


    // 获取青春校园所有书籍
export const actiongetSchoolBooks = () => 
async dispatch => {
    let data = await getSchoolBooks()
        data = data.books
   
    dispatch({
        type: getSchoolBooksType,
        value: data
    })
}
    // 获取女生现代言情热门书籍
export const actiongetGhotBooks = () => 
    async dispatch => {
        let data = await getGhotBooks()
            data = data.books
       
        dispatch({
            type: getGhotBooksType,
            value: data
        })
    }

    // 获取女生现代言情完结书籍
export const actiongetGfinishingBooks = () => 
    async dispatch => {
      
        let data = await getGfinishingBooks()
            data = data.books
        dispatch({
            type: getGfinishingBooksType,
            value: data
        })
    }
    
 


       

