import {
    GET_KITTEN_PHOTO,
    GET_KITTEN_PHOTO_COMPLETED,
    GET_KITTEN_PHOTO_FAILED
} from './actionTypes';

export const getKittenPhoto = (payload) => ({
    type: GET_KITTEN_PHOTO,
    payload
});

export const getKittenPhotoCompleted = (payload) => ({
    type: GET_KITTEN_PHOTO_COMPLETED,
    payload
});

export const getKittenPhotoFailed = (payload) => ({
    type: GET_KITTEN_PHOTO_FAILED,
    payload
});
