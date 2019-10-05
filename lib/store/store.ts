import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {
  authentication: {},
  signUp: {},
  users: {},
  alert: {},
  project: { createProjectRequest: {}, getProjects: {}, getProject: {} },
};

export const initializeStore = (preloadedState = initialState) => {
  const loggerMiddleware = createLogger();
  console.log(preloadedState);

  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)),
  );
};
