import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers';

export const initializeStore = () => {

    const loggerMiddleware = createLogger();

    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        )),
    )
}
