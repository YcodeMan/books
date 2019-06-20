import immutable from 'immutable'
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
    console.log(action.value,2222222222)
   switch(action.type) {
        case getAllBooksType:
             return state.updateIn(['citybooks'], val => val = immutable.fromJS(action.value))

        case getQhuanBooksType:
            return state.updateIn(['qhuanbooks'], val => val = immutable.fromJS(action.value))

        case getXxiaBooksType:
            return state.updateIn(['xxianbooks'], val => val = immutable.fromJS(action.value))
            
        case getSchoolBooksType:
            return state.updateIn(['schoolbooks'], val => val = immutable.fromJS(action.value))

        case getGhotBooksType:
            return state.updateIn(['girlbooks'], val => val = immutable.fromJS(action.value))

        case getGfinishingBooksType:
            return state.updateIn(['gfinishbooks'], val => val = immutable.fromJS(action.value))
   }
    return state
}
