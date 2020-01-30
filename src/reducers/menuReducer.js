const menuReducer = (state = [], action) => {
    switch(action.type) {
        case "OPEN_MENU":
            return state = {
              visibility: action.data
            };
        case "CLOSE_MENU":
            return state = {
                visibility: action.data
            };
        default:
            return state;
    }
};

export default menuReducer;
