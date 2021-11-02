function add_user(){
    username = document.getElementById("user_name").value;
    localStorage.setItem("Username" , username);
    window.location = "Kwitter_room.html" ;
}
