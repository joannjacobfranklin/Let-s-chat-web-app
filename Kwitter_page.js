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

  user_name = localStorage.getItem("Username");
  room_name = localStorage.getItem("Roomname");
  console.log("USERNAME = " + user_name + " ROOMNAME = " + room_name);
  document.getElementById("room_name").innerHTML = room_name;

  function send_message(){
      message = document.getElementById("message_input").value;
      console.log("send - " + message);
      firebase.database().ref(room_name).push({
        name:user_name,
        message:message,
        like:0
      });   
      document.getElementById("message_input").value = null;
  }

  function logout(){
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
  }
