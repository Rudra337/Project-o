var firebaseConfig = {
    apiKey: "AIzaSyC1aWFd2MBbaEUfrcbMTPtkVySwLQmnJPo",
    authDomain: "hello-5b88b.firebaseapp.com",
    projectId: "hello-5b88b",
    storageBucket: "hello-5b88b.appspot.com",
    messagingSenderId: "547579998331",
    appId: "1:547579998331:web:bae6f127147646915f32de",
    measurementId: "G-KR63Y9403B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 function addRoom() 
 {
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
       });
       localStorage.setItem("room_name", room_name);
       window.location = "roompage_.html";
 }
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id='+Room_names' onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>"
    document.getElementById("output").innerHTML += row;
    //End code
    });
});
}
getData();

function redirectToRoomName(name) 
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwiter_room.html";
}
function logout() 
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}