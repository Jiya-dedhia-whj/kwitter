
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCidD3G5xRsnGBGqSGN9jX6luzeoDHwsMo",
      authDomain: "kwitter-202f8.firebaseapp.com",
      databaseURL: "https://kwitter-202f8-default-rtdb.firebaseio.com",
      projectId: "kwitter-202f8",
      storageBucket: "kwitter-202f8.appspot.com",
      messagingSenderId: "800447348078",
      appId: "1:800447348078:web:158d268839c928627f957f",
      measurementId: "G-3PPHD35YC4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML  = "Welcome " + user_name + "!";

    function add_room(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "add your room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name-"+Room_names);
       row = "<div class = 'room_name' id = '+Room_names+' onclick = 'redirecttoroomnames(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //Start code

      //End code
      });});}
getData();
function redirecttoroomnames(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
 function logout(){
       localStorage.removeItem("room_name");
       localStorage.removeItem("user_name");
       window.location = "index.html";
 }
