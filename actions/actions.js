export const ADD_UNICORN = 'ADD_UNICORN';
export const LIVE_UPDATE = 'LIVE_UPDATE';

export function addUnicorn(unicorn) {
    return {
        type: ADD_UNICORN,
        name: unicorn.name,
        magnetic: unicorn.magnetic,
        powerLevel: unicorn.powerLevel
    };
}

export function updateLiveValue(value) {
    return {
        type: LIVE_UPDATE,
        value: value
    };
}
