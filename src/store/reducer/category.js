import {receiveCatAction,sendCatAction} from '@action/catsAction/actionTypes'

const defaultState = {
    data:{
        ok:false
    },
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case catsAction:
            return action.payload;
        default:
            return state;
    }
}