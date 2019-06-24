import immutable from 'immutable'

import {
    getReadListType,
    getReadContentType
    } from '@actions/readPage/actionType'

const defaultState = immutable.fromJS({
    readList: [],
    readContent: [],
  
})

export default (state=defaultState, action) => {
    console.log(action.value,9090)
   switch(action.type) {
    //    章节
        case getReadListType:
             return state.updateIn(['readList'], val => val = immutable.fromJS(action.value))
        case getReadContentType:
             return state.updateIn(['readContent'], val => val = immutable.fromJS(action.value))
   }
    return state
}
