
var firebaseConfig = {
  apiKey: "AIzaSyAUzoZtC8nil5erIXq9u80P8MxOT6rWUlc",
  authDomain: "chat-app-9b39e.firebaseapp.com",
  databaseURL: "https://chat-app-9b39e-default-rtdb.firebaseio.com",
  projectId: "chat-app-9b39e",
  storageBucket: "chat-app-9b39e.appspot.com",
  messagingSenderId: "555486925206",
  appId: "1:555486925206:web:286044fbd3b7c666fd4db7",
  measurementId: "G-M8VF0Y2E1Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function displayUser() {

  username = localStorage.getItem("Username");
  console.log(username);
  document.getElementById("Name_of_user").innerHTML = "Welcome" + '&nbsp' + username + "!";
}


function addRoom(){

  room_name = document.getElementById("RoomNameInput").value;
  
  localStorage.setItem("Roomname" , room_name);

  console.log(room_name);

  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });

  window.location = "Kwitter_page.html";

}
romm = 0
//rowtext = "";
//rowtext = rowtext + row;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
//Start code
  romm = romm + 1;
  console.log(Room_names + ", ROOM" + romm);
  row = "<br><div class = 'room_name' id = '" + Room_names + "' onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>"; 
  document.getElementById("room_names").innerHTML += row;
  console.log(row);
  
//End code
});});}
getData();


//function getData1() {
  //Start code
  //console.log("Room_names1");
  //row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
  //row = "<div>test</div>";
  //document.getElementById("room_names").innerHTML = row;
  //End code
//}

function redirectToRoomName(name){

  console.log("ENTERING ROOM NAME ------ " + name);
  localStorage.setItem("Roomname" , name);
  window.location = "Kwitter_page.html";
  
  
}


function Logout(){
    
  console.log("logout");
  localStorage.removeItem("Username");
  localStorage.removeItem("Roomname");
  window.location = "index.html";

}



