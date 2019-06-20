import immutable from 'immutable'
import {getBookDetailsType} from '@actions/bookDetails/actionType'

const defaultState = immutable.fromJS({
    bookDetail: {}
})

export default (state=defaultState, action) => {
   switch(action.type) {
        case getBookDetailsType:
             return state.updateIn(['bookDetail'], val => val = immutable.Map(action.value))
   }
    return state
}