//firebaseConfig = {
  //  apiKey: "AIzaSyArJyo27oZWfes1VfDNcYPyFEHf730WlcU",
    //authDomain: "einstien-pbex.firebaseapp.com",
    //databaseURL: "https://einstien-pbex-default-rtdb.firebaseio.com",
    //projectId: "einstien-pbex",
    //storageBucket: "einstien-pbex.appspot.com",
    //messagingSenderId: "920551931165",
    //appId: "1:920551931165:web:b8d2e4f3704c41390a35f4"
  //};
  
//firebase.initializeApp(firebaseConfig);

window.onload = function What() {
    ygjk = localStorage.getItem("User");
    document.getElementById("Welcome").innerHTML = "Welcome " + ygjk + " !";
}