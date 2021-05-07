import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD8QIsNEUmkFGcJ4WUn8kayBSpKfnNjCyg',
  authDomain: 'devter-e0cd3.firebaseapp.com',
  projectId: 'devter-e0cd3',
  storageBucket: 'devter-e0cd3.appspot.com',
  messagingSenderId: '877293946298',
  appId: '1:877293946298:web:2024d7a8ba235c4ee80983',
  measurementId: 'G-YS7N6ZVDHH',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const mapUserFromFirebaseAuthToUser = (user) => {
  return {
    avatar: user?.photoURL,
    username: user?.displayName,
    email: user?.email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user);
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const provider = new firebase.auth.GithubAuthProvider();

  return firebase.auth().signInWithPopup(provider);
};
