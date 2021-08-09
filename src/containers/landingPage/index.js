import * as KittenEpic from './epic';
import * as kittenActions from './actions';
import * as kittenActiontypes from './actionTypes';
import { kittenReducer } from './reducer';

const kittenEpic = Object.values({ ...KittenEpic });

export { kittenActions, kittenActiontypes, kittenEpic, kittenReducer };
