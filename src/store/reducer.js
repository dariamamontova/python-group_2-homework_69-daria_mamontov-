const initialState = {
    value: 0,
    buttons: [ "1", "2", "3", "C", "4", "5", "6", "=", "7", "8", "9", "/", "+", "0", "-", "*"]
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD':
            return{...state, value: state.value === 0 ? action.text : state.value + action.text}
        case 'CLEAR':
            return{...state, value: 0}
        case 'EQUAL':
            return{...state, value: eval(action.value)}
        default:
            return state;
    }
};

export default reducer;