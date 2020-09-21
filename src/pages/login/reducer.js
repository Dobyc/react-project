const defaultState = {
    isFetching: false,
    userInfo: {
        username: '',
        company: '',
    }
}

export default function login(state = defaultState, action) {
    switch (action.type) {
        case 'FETCH_LOGIN':
            return {
                ...state,
                isFetching: true
            }
        case 'RECEIVE_LOGIN':
            return {
                ...state,
                username: action.username,
                company: action.company,
                isFetching: false
            }
        default:
            return state
    }
}

