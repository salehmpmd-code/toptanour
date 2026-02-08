fetch("http://localhost:8000/items")
.then(r=>r.json()).then(d=>{
const m=document.getElementById("menu")
d.forEach(i=>{
let c=document.createElement("div")
c.className="card"
c.innerHTML=`<h3>${i.name}</h3><p>${i.price}</p>`
m.appendChild(c)
})
})