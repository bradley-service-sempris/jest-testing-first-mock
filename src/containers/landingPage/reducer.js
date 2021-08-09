import {fromJS} from 'immutable';
import {
    GET_KITTEN_PHOTO,
    GET_KITTEN_PHOTO_COMPLETED,
    GET_KITTEN_PHOTO_FAILED
} from './actionTypes';

export const initialState = fromJS({
    kittenPhoto: '',
    isLoading: false,
    hasBeenLoaded: false,
    error: ''
});

export const kittenReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_KITTEN_PHOTO:
            return state.set('isLoading', true);
            
        case GET_KITTEN_PHOTO_COMPLETED:
            return state.set('isLoading', false)
                .set('hasBeenLoaded', true)
                .set('kittenPhoto', action.payload);

        case GET_KITTEN_PHOTO_FAILED:
            return state.set('hasBeenLoaded', true)
                .set('isLoading', false)
                .set('kittenPhoto', '')
                .set('error', action.payload);
        
        default:
            return state;
    }
};