import { applyMiddleware, createStore, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
// import createSagaMiddleware, { END } from 'redux-saga'
// import rootSaga from '../sagas'

const NODE_ENV = process.env.NODE_ENV;

// 自动import所有reducer
const contexts = require.context('./pages', true, /reducer\.js$/)
const reducers = {}
contexts.keys().map(contextKey => {
    const [key] = contextKey.match(/(?<=\/).+(?=\/reducer\.js$)/) || []
    if(key) reducers[key] = contexts(contextKey).default
})

console.log('reducers', reducers)

const logger = createLogger();
const middlewares = [];
// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];
if (NODE_ENV === 'development') {
    middlewares.push(logger)
}

const createAppStore = applyMiddleware(...middlewares)(createStore);

const store = createAppStore(combineReducers(reducers));
// sagaMiddleware.run(rootSaga);
// store.close = () => store.dispatch(END);

export default store;