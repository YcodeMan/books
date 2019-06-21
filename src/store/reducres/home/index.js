import immutable from 'immutable'
import getRandomBook from "@filters/getRandomBook.js"
import {
        getAllBooksType,
        getQhuanBooksType,
        getXxiaBooksType,
        getSchoolBooksType,
        getGhotBooksType,
        getGfinishingBooksType
    } from '@actions/home/actionType'

const defaultState = immutable.fromJS({
    citybooks: [],
    qhuanbooks: [],
    xxianbooks: [],
    schoolbooks: [],
    girlbooks: [],
    gfinishbooks: [],
})

export default (state=defaultState, action) => {
    let bookArr = action.value
    // console.log(action.value,2222222222)
   switch(action.type) {
        case getAllBooksType:
             return state.updateIn(['citybooks'], val => val = immutable.fromJS(getRandomBook(bookArr,bookArr.lenght)))

        case getQhuanBooksType:
            return state.updateIn(['qhuanbooks'], val => val = immutable.fromJS(getRandomBook(bookArr,bookArr.lenght)))

        case getXxiaBooksType:
            return state.updateIn(['xxianbooks'], val => val = immutable.fromJS(getRandomBook(bookArr,bookArr.lenght)))
            
        case getSchoolBooksType:
            return state.updateIn(['schoolbooks'], val => val = immutable.fromJS(getRandomBook(bookArr,bookArr.lenght)))

        case getGhotBooksType:
            return state.updateIn(['girlbooks'], val => val = immutable.fromJS(getRandomBook(bookArr,bookArr.lenght)))

        case getGfinishingBooksType:
            return state.updateIn(['gfinishbooks'], val => val = immutable.fromJS(getRandomBook(bookArr,bookArr.lenght)))
   }
    return state
}
