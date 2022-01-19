function addUser(){

    username = document.getElementById("add_user").value;
    localStorage.setItem("username" , username);
    window.location = Kwitter.html;

}