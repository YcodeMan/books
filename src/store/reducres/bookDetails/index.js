import immutable from 'immutable'
import {getBookDetailsType, getBookCommentType} from '@actions/bookDetails/actionType'

const defaultState = immutable.fromJS({
    bookDetail: {},
    commentList: {},
    showComment: []
})

export default (state=defaultState, action) => {
    
   switch(action.type) {
        case getBookDetailsType:
             return state.updateIn(['bookDetail'], val => val = immutable.fromJS(action.value))
        case getBookCommentType:
                console.log(action.value.reviews.slice(0,2), 'dadfsaga')
            return state.updateIn(['commentList'],  val => val = immutable.Map(action.value))
            .updateIn(['showComment'], val => val = immutable.fromJS(action.value.reviews.slice(0,2))) 
   }
    return state
}