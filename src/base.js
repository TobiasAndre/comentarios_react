import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey:"AIzaSyBeuQGm6yC3c6dwXQdz3sXhWdAoSAHLhn4",
    authDomain:"reactjs-e566d.firebaseapp.com",
    databaseURL:"https://reactjs-e566d.firebaseio.com",
    storageBucket:"",
    messagingSenderId:"1075356105826"
})
const db = firebase.database(firebaseApp)

const base = Rebase.createClass(db)

export const providers = {
    'facebook':new firebase.auth.FacebookAuthProvider()
}
export const auth = firebaseApp.auth()
export default base