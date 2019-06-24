import immutable from 'immutable'
import {subjectListType} from '@actions/subjectList/actionType'

const defaultState = immutable.fromJS({
    list : []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case subjectListType:
            return state.updateIn(['list'],val => val = immutable.fromJS(action.value.bookLists)) 
    }
    return state
}