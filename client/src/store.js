import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import taskReducer from './reducers/taskReducer';
import projectReducer from'./reducers/projectReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  projects:projectReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
