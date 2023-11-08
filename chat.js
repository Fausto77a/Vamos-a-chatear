// Configuración de Firebase de tu app web
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
const firebaseConfig = {
    apiKey: "AIzaSyCiXzfu3pH7fb7vx8iBYocCdNeynSDJTIE",
    authDomain: "chat-b8f71.firebaseapp.com",
    databaseURL: "https://chat-b8f71-default-rtdb.firebaseio.com",
    projectId: "chat-b8f71",
    storageBucket: "chat-b8f71.appspot.com",
    messagingSenderId: "1023049771377",
    appId: "1:1023049771377:web:da836c173aa3ce7b45eed0",
    measurementId: "G-9NMLHKBE4D"
  };
  

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



