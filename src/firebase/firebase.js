import * as firebase from 'firebase';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  };

    // Initialize Firebase
firebase.initializeApp(config);
const database = firebase.database();

export {firebase, database as default };


// // child_removeAdd
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })
// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapShot)=> {
//       expenses.push({
//         id: childSnapShot.key,
//         ...childSnapShot.val()
// //       })
// //     })
// //     console.log(expenses)
// //   }, (e) => {
// //     console.log('error fetching data', e)
// //   })

// database.ref('expenses').push({
//   description: 'Bill 1',
//   note: '',
//   amount: 300,
//   createdAt: 1
// })


// // database.ref('notes/-MK-Ymqp0VbDjNwIsf2x').remove()


// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React...',
// // })


// // setTimeout(()=> {
// //   database.ref('job/company').set('ekos');
// // }, 3500);

// // database.ref().set({
// //   name: 'matt',
// //   stressLevel: 6,
// //   age: 28,
// //   job: {
// //     title: 'software dev',
// //     company: 'Google',
// //   },
// //   location: {
// //     city: 'QC',
// //     country: 'USA'
// //   },
// // }).then(()=> {
// //   console.log('data saved');
// // }).catch((err)=> {
// //   console.log('error: ' + err);
// // })


// // database.ref().update({
// // stressLevel: 9,
// // 'job/company': 'Amazon',
// // 'location/city': 'seattle'
// // })

// // database.ref().remove().then(()=> console.log('deleted')).catch(err => console.log(err))