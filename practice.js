// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBHUE0Ec6w-ZRzJGjgSIXuYRrdgoaC3qzU",
    authDomain: "kwitter-1e816.firebaseapp.com",
    databaseURL: "https://kwitter-1e816-default-rtdb.firebaseio.com",
    projectId: "kwitter-1e816",
    storageBucket: "kwitter-1e816.appspot.com",
    messagingSenderId: "463676876549",
    appId: "1:463676876549:web:c84db568659ea77a5e396c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }