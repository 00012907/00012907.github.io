// Navbar Responsive Hamburger
const hamburger=document.querySelector(".hamburger");
//getting/adding the elemnts by their class name
const navbar=document.querySelector(".navbar");
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    navbar.classList.toggle("active")
})

document.querySelectorAll(".navbar a").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
}))

