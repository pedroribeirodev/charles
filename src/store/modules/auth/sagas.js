import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password, grant_type } = payload;

  const client_id = 'aVgjhEBcnN-ytRrewsWJrSpoKnh';
  const client_secret = 'q4fYtRGIkmLJKtx9Y5MaUYFPPdasd2QD4hTI4Gds45tgfSAdlkj';
  const token = 'Basic ' + btoa(`${client_id}:${client_secret}`);

  const headers = {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    token,
  };

  const response = yield call(
    api.post,
    'auth/token',
    {
      email: email,
      password: password,
      grant_type: grant_type,
    },
    { headers }
  );

  console.log(response);

  /*   const { token, user } = response.data; */



  /* yield put(signInSuccess(token, user)); */

  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
