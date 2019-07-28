let firebase = require("firebase")
var firebaseConfig = {
    apiKey: "AIzaSyDf8fH7kI5fRSZTgUXyV8L8ULvXDxS4NWY",
    authDomain: "opensourced-a8340.firebaseapp.com",
    databaseURL: "https://opensourced-a8340.firebaseio.com",
    projectId: "opensourced-a8340",
    storageBucket: "opensourced-a8340.appspot.com",
    messagingSenderId: "644855248993",
    appId: "1:644855248993:web:52aeec96007b123b"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const dataBase = firebase.database();
const auth = firebase.auth(); 
module.exports = {dataBase,auth}