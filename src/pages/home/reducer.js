const defaultState = {
    page: 'Home',
    text: ''
}

export default function home(state = defaultState, action) {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}