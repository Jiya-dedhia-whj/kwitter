//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("message").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("message").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
