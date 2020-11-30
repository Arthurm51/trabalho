import firebase from 'firebase'
import config from './FirebaseConfig.js'

firebase.initializeApp(config);

export default firebase;