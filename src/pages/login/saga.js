import { put, take, call, fork, takeEvery, select } from 'redux-saga/effects';
import { message } from 'antd';
import request from '../../utils/request'
import { fetchLogin, receiveLogin } from './action';

export function* requestLogin(username, password) {
    console.log('requestLogin')
    try {
        yield put(fetchLogin());
        const res = yield call(request, '/login', 'post', { username, password });
        yield put(receiveLogin(res.data.username, res.data.company));
        if (res.code !== 200) {
            yield message.error(res.message)
        }
    } catch (e) {
        console.error('saga requestLogin Error', e)
    }
}


export function* watchRequestLogin() {
    console.log('watchRequestLogin')
    while (true) {
        const { username, password } = yield take('REQUEST_LOGIN');
        yield fork(requestLogin, username, password);
    }
}

export default ['watchRequestLogin'] // 不写默认监听所有watch开头的方法