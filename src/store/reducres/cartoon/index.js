import immutable from 'immutable'
import getRandomBook from "@filters/getRandomBook.js"
import {
    getHotBloodBooksType,
    getLaughBooksType,
    getLoveBooksType,
    getMagicBooksType
    } from '@actions/cartoon/actionType'

    
const defaultState = immutable.fromJS({
    hotbloodbooks: [],
    laughbooks: [],
    lovebooks: [],
    magicbooks: []
})

export default (state=defaultState, action) => {
    let booksArr = action.value
    // console.log(booksArr,9090)
   switch(action.type) {
        case getHotBloodBooksType:
             return state.updateIn(['hotbloodbooks'], val => val = immutable.fromJS(getRandomBook(booksArr,booksArr.lenght)))
        case getLaughBooksType:
            return state.updateIn(['laughbooks'], val => val = immutable.fromJS(getRandomBook(booksArr,booksArr.lenght)))
        case getLoveBooksType:
            return state.updateIn(['lovebooks'], val => val = immutable.fromJS(getRandomBook(booksArr,booksArr.lenght)))
        case getMagicBooksType:
            return state.updateIn(['magicbooks'], val => val = immutable.fromJS(getRandomBook(booksArr,booksArr.lenght)))
   }
    return state
}
