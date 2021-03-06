import {combineReducers} from 'redux'
import {ADD_UNICORN, LIVE_UPDATE} from "../actions/actions";

function unicorn(state, action) {
    switch (action.type) {

        case ADD_UNICORN:
            return {
                name: action.name,
                magnetic: action.magnetic,
                powerLevel: action.powerLevel
            };

        default:
            return state
    }
}

function unicorns(state = [], action) {
    switch (action.type) {

        case ADD_UNICORN:
            return [
                ...state,
                unicorn(undefined, action)
            ];

        default:
            return state
    }
}

function live(state = 'NO UPDATE YET', action) {
    if (action.type == LIVE_UPDATE)  {
        return action.value;
    }

    return state;
}

const unicornApp = combineReducers({
    unicorns,
    live
});

export default unicornApp
