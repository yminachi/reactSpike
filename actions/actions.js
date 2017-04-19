export const ADD_UNICORN = 'ADD_UNICORN';

export function addUnicorn(name, magnetic, powerLevel) {
    return {
        type: ADD_UNICORN,
        name: name,
        magnetic: magnetic,
        powerLevel: powerLevel
    };
}