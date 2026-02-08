document.getElementById("login").onsubmit=e=>{
e.preventDefault()
fetch("http://localhost:8000/login",{
method:"POST",
body:new URLSearchParams({username:u.value,password:p.value})
}).then(r=>r.json()).then(d=>{
if(d.success){add.style.display="block"}
})
}