import immutable from 'immutable'
import {getBookDetailsType, getBookCommentType} from '@actions/bookDetails/actionType'

const defaultState = immutable.fromJS({
    // 书本的详细数据
    bookDetail: {},

    // 评论数据
    commentList: {},

    // 默认展示的评论
    showComment: [],

    // 书本的id
    id: window.sessionStorage.getItem('id') || '',

    // 请求评论是否为空
    isNull: false,

    // 评论的页数
    page: 1
})

export default (state=defaultState, action) => {
    
   switch(action.type) {
        case getBookDetailsType:   
            let oldState  = state.updateIn(['bookDetail'], val => val = immutable.fromJS(action.value))
            return oldState.updateIn(['id'], val => val = oldState.getIn(['bookDetail', '_id']))
                    .updateIn(['page'], val => val = 1)
                    .updateIn(['isNull'], val => val = false)
             // 获取评论数据
        case getBookCommentType:
            
           if(state.getIn(['commentList']).size > 0) {
            if (action.value.total == state.getIn(['commentList', 'reviews']).size ) {
                return state.updateIn(['isNull'], val => val = true)
            }
            return state.updateIn(['commentList'], val => Array.prototype.push.apply(val,immutable.fromJS(action.value)))
                    .updateIn(['page'], val => ++val)
           }
            return state.updateIn(['commentList'],  val => val = immutable.fromJS(action.value))
            .updateIn(['showComment'], val => val = immutable.fromJS(action.value.reviews.slice(0,2))) 
   }
    return state
}