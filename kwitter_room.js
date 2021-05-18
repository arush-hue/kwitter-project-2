
//Firebase Links Here
var firebaseConfig = {
    apiKey: "AIzaSyD4Ar-2PyqBgnjytvH9TO2kh_GoQTEqbJo",
    authDomain: "kwitter-project-9f0b2.firebaseapp.com",
    databaseURL: "https://kwitter-project-9f0b2-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-9f0b2",
    storageBucket: "kwitter-project-9f0b2.appspot.com",
    messagingSenderId: "258170259296",
    appId: "1:258170259296:web:6caa9d7a10f992af684005",
    measurementId: "G-R71N22MN4B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("username");
  document.getElementById("color").innerHTML="Welcome "+ username +"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room_name="+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='simpleName(this.id)'>#"+Room_names+"</div><hr>";
    console.log(row);
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"hello"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location("kwitter.html")
}