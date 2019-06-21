import immutable from 'immutable'
import {
    getHotBloodBooksType,
    } from '@actions/cartoon/actionType'

    
const defaultState = immutable.fromJS({
    hotbloodbooks: [],
})

export default (state=defaultState, action) => {
   switch(action.type) {
        case getHotBloodBooksType:
             return state.updateIn(['hotbloodbooks'], val => val = immutable.fromJS(action.value))

   }
    return state
}
