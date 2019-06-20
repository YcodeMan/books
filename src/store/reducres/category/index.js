import {catsActionType} from '@actions/catsAction/actionTypes'
import immutable from 'immutable'

const defaultState = immutable.fromJS({
    category:{ },
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case catsActionType:
            console.log(action.value)
            return state.updateIn(['category'],data => data=immutable.fromJS(action.value));
        default:
            return state;
    }
}