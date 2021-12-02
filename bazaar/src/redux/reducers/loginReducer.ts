import { FetchLoginDetails } from '../../types/actions';
 
const defaultState:{username:string, password:string} = {username:'', password:''};

const loginReducer = (state = defaultState, action : FetchLoginDetails):{username:string, password:string} => {
    switch (action.type){
        case 'FETCH_LOGIN_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

export default loginReducer;