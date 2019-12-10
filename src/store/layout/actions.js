import { store } from 'store/Redux';
import * as types from './actionTypes';
import ENV from '../../env' //eslint-disable-line
import { post } from '../../utils/request';
import { setLoading } from '../loading/actions';

const { BASE_URL, BPM_FUNCTION } = ENV;

export const menuOpened = opened => ({
  type: types.SET_STATE,
  opened,
});
