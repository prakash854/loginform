let loginbutton = document.querySelector(".log_out");

let user = document.getElementById("username");
let pass = document.getElementById("password");

loginbutton.onclick = ()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    loginbutton.innerHTML = "<div class='loader'></div>";
    setTimeout(()=>{
        location.replace("index.html")
    },3000)
}

  
   
   
  




