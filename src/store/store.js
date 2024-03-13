import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {account,favorite,Folder,Preview,Mode, Pins} from '../reducers/Reducers'

const rootReducer = combineReducers({account,favorite,Folder,Preview,Mode, Pins});
//maybe wrong
export const Store = createStore(rootReducer,applyMiddleware(thunk));