import React , {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import LoginForm from './components/LoginForm';
import RouterComponent from './Router';

class App extends Component{
	componentWillMount() {
	  const config = {
	  	
	    apiKey: "AIzaSyCk6_RuFUKjHYYeWHU27A-Epo2hG9-jzyg",
	    authDomain: "manager-d7c96.firebaseapp.com",
	    databaseURL: "https://manager-d7c96.firebaseio.com",
	    storageBucket: "manager-d7c96.appspot.com",
	    messagingSenderId: "272609140738"
	  };

	  firebase.initializeApp(config);
	}
	render(){

		const initialStoreState = {};
		
		const store = createStore(reducers, initialStoreState, applyMiddleware(ReduxThunk));
		
		return (
			<Provider store={store}>
				<RouterComponent />	
			</Provider>
		)
	}
}

export default App;