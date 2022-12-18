





let loginbutton = document.querySelector(".login");
let user = document.getElementById("username");
let pass = document.getElementById("password");


loginbutton.onclick = ()=>{
    loginbutton.innerHTML = "<div class='loader'></div>";
    localStorage.setItem("username",user.value);
    localStorage.setItem("password",pass.value);
    sessionStorage.setItem("username",user.value);
    sessionStorage.setItem("password",pass.value);
    setTimeout(()=>{
        location.replace("home.html")
    },4000) 
}



