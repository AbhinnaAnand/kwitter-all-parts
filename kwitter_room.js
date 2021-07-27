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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML+=row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}