import immutable from 'immutable'
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
  
   switch(action.type) {
        case getHotBloodBooksType:
             return state.updateIn(['hotbloodbooks'], val => val = immutable.fromJS(action.value))
        case getLaughBooksType:
            return state.updateIn(['laughbooks'], val => val = immutable.fromJS(action.value))
        case getLoveBooksType:
            return state.updateIn(['lovebooks'], val => val = immutable.fromJS(action.value))
        case getMagicBooksType:
            return state.updateIn(['magicbooks'], val => val = immutable.fromJS(action.value))
   }
    return state
}
