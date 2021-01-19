//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAi4gP7US6xvLEh_qtKdTh48MXhiPl68Pk",
      authDomain: "c---94-practice-sheet.firebaseapp.com",
      databaseURL: "https://c---94-practice-sheet-default-rtdb.firebaseio.com",
      projectId: "c---94-practice-sheet",
      storageBucket: "c---94-practice-sheet.appspot.com",
      messagingSenderId: "321187241924",
      appId: "1:321187241924:web:394585759a911ffa564e91"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + " !";

    function addRoom(){
     room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose: "adding room name"
     });
     localStorage.setItem("room_name", room_name);
     window.location= "kwitter_page.html";
    }

    
     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row="<div clas='room_name' id=" + Room_names + " onclick='redirectToRoomname(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}