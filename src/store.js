import { applyMiddleware, createStore, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { all, fork } from 'redux-saga/effects'
import createSagaMiddleware, { END } from 'redux-saga'
// import rootSaga from '../sagas'

const NODE_ENV = process.env.NODE_ENV;

// 自动import所有reducer
const reducerContexts = require.context('./pages', true, /reducer\.js$/)
const reducers = {}
reducerContexts.keys().map(contextKey => {
    const [key] = contextKey.match(/(?<=\/).+(?=\/reducer\.js$)/) || []
    if (key) reducers[key] = reducerContexts(contextKey).default
})

// 自动import所有saga
const sagaContexts = require.context('./pages', true, /saga\.js$/)
const sagas = []
sagaContexts.keys().map(contextKey => {
    const funs = sagaContexts(contextKey)
    if (funs.default && toString.call(funs.default) === '[object Array]') {
        // 如果有export default,根据default数组监听
        funs.default.map(key => {
            if (funs[key]) {
                sagas.push(fork(funs[key]))
            }
        })
    }else{
        // 如果没有export default,监听所有watch开头的方法
        Object.keys(funs).map(key => {
            if(/^watch/.test(key)){
                sagas.push(fork(funs[key]))
            }
        })
    }
})

function* rootSaga() {
    yield all(sagas)
}

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (NODE_ENV === 'development') {
    middlewares.push(logger)
}

const createAppStore = applyMiddleware(...middlewares)(createStore);

const store = createAppStore(combineReducers(reducers));
sagaMiddleware.run(rootSaga);
store.close = () => store.dispatch(END);

export default store;