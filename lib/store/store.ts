import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers';

export const initializeStore = (initialState?: any) => {

    const loggerMiddleware = createLogger();

    console.log(initialState)

    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        )),
    )
}
