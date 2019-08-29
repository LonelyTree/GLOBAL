import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyBVUiVulhYfCF9zNwhcEtucgNvpsKoqsuk',
	authDomain: 'global-b98d8.firebaseapp.com',
	databaseURL: 'https://global-b98d8.firebaseio.com',
	projectId: 'global-b98d8',
	storageBucket: '',
	messagingSenderId: '229931824451',
	appId: '1:229931824451:web:f6c339b0e20bf2df',
}

firebase.initializeApp(firebaseConfig)

export default Firebase
