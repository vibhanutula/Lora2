function AddUser() {
    var User = document.getElementById("User");
    localStorage.setItem("User", User);
    window.location = "room.html";
}