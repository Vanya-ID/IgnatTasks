

const initState = {
    loading: false
};

export const loadingReducer = (state = initState, action: loadingAT): typeof initState => { // fix any
    switch (action.type) {
        case "LOADING": {
            return {
                ...state,
                loading: action.loading
            }
        }
        default: return state;
    }
};

type loadingAT = {
    type: 'LOADING'
    loading: boolean
}

export const loadingAC = (loading: boolean): loadingAT => {
    return{
        type: 'LOADING',
        loading: loading
    }
}