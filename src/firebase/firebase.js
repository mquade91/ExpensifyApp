import * as firebase from 'firebase';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const config = {
    apiKey: "AIzaSyAlJBMc-jITYnWPJJB09FONwSbOv0Sb6z8",
    authDomain: "expensify-2ecbc.firebaseapp.com",
    databaseURL: "https://expensify-2ecbc.firebaseio.com",
    projectId: "expensify-2ecbc",
    storageBucket: "expensify-2ecbc.appspot.com",
    messagingSenderId: "553232614159",
    appId: "1:553232614159:web:5eda1458343e3a5a93b47a",
    measurementId: "G-RQWDR5HN37"
  };

    // Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'matt',
  age: 28,
  isSingle: true,
  location: {
    city: 'QC',
    state: 'NC'
  },
}).then(()=> {
  console.log('sed')
}).catch((err)=> {
  console.log(err)
})


// database.ref().remove().then(()=> console.log('deleted')).catch(err => console.log(err))