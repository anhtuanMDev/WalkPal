import { applyMiddleware, createStore, Middleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootSaga from './sagas';
import rootReducer from './reducers';


const middleWare: Middleware[] = [];

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth', 'config'],
  };

const persistReducers = persistReducer(persistConfig, rootReducer);
const store = createStore(
    persistReducers,
    applyMiddleware(sagaMiddleware, ...middleWare)
)
persistStore(store);
sagaMiddleware.run(rootSaga);
export default store;