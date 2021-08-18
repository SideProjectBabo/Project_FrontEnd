import { actionType } from "src/types"
const authReducer = (state: false, action: actionType) => {
    switch (action.type) {
        case "LOG_IN":
            return false;

        case "LOG_OUT":
            return false;
        default:
            return state;

    }

}
export default authReducer