import { FetchBanners } from '../../types/actions';
import { Banner } from '../../types/banner';
 
const defaultState:Banner[] = [];

const bannersReducer = (state = defaultState, action : FetchBanners):Banner[] => {
    switch (action.type){
        case 'FETCH_BANNERS':
            return action.payload;
        default:
            return state;
    }
}

export default bannersReducer;