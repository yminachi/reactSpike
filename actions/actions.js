export const ADD_UNICORN = 'ADD_UNICORN';

export function addUnicorn(unicorn) {
    return {
        type: ADD_UNICORN,
        name: unicorn.name,
        magnetic: unicorn.magnetic,
        powerLevel: unicorn.powerLevel
    };
}