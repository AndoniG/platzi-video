import 'react-native-gesture-handler';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import {Loader} from './src/components/Loader';
import MovieDetail from './src/containers/MovieDetail';
import TabLayoutScreen from './src/containers/TabLayout';
import Category from './src/containers/Category';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Header} from './src/components/Header';

// Persist config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blackList: ['selectedMovie'],
  timeout: 10000,
};

// Persist Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Creating the store
const store = createStore(
  persistedReducer, // Set reducers
  {}, // Initial State
  applyMiddleware(reduxThunk),
);

const persistor = persistStore(store);
const Stack = createStackNavigator();
const stackScreens = [
  {
    name: 'TabLayout',
    component: TabLayoutScreen,
    options: {header: () => <Header />},
  },
  {
    name: 'MovieDetail',
    component: MovieDetail,
    options: {
      header: () => {
        <Header />;
      },
      gestureEnabled: true,
    },
  },
  {
    name: 'Category',
    component: Category,
    options: {
      header: () => {
        <Header />;
      },
      gestureEnabled: true,
    },
  },
];

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            headerMode="float"
            mode="card">
            {stackScreens.map(screen => (
              <Stack.Screen {...screen} key={screen.name} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
