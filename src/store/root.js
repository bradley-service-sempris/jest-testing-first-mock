import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { catchError } from 'rxjs/operators';
import { kittenEpic, kittenReducer } from '../containers/landingPage';

const epics = combineEpics(...kittenEpic);

const rootReducer = combineReducers({
    kittenReducer
});

const rootEpic = (action$, store$, dependencies) =>
    epics(action$, store$, dependencies).pipe(
        catchError((error, source) => {
            console.error('Root Epic Error: ', error);
            return source;
        })
);

export { rootEpic, rootReducer };