import axios from 'axios';
import { ofType } from 'redux-observable';
import { of, merge } from 'rxjs';
import { mergeMap, switchMap, catchError } from 'rxjs/operators';

import {
    getKittenPhotoCompleted,
    getKittenPhotoFailed
} from './actions';
import {
    GET_KITTEN_PHOTO
} from './actionTypes';

export const getKittenPhotoEpic = (action$) =>
    action$.pipe(
        ofType(GET_KITTEN_PHOTO),
        mergeMap(async (action) => {
            const config = { responseType: 'blob' };
            const url = 'http://placekitten.com/100/200';
            const kittenPhoto = await axios.get(url, config);
            const convertBlob = (blob) => {
                const base64 = [];
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    const base64data = reader.result;
                    base64.push(base64data);
                };
                return base64;
            };
            const response = convertBlob(kittenPhoto.data);

            return response;
        }),
        switchMap((res) => [getKittenPhotoCompleted(res)]),
        catchError((error, source) =>
            merge(of(getKittenPhotoFailed(error)), source)
        )
    );