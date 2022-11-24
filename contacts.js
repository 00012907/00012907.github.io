

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


// interacting with buttons

function complaint(){
    alert("Oh, we are really sorry! Please write your email and issue we will contact you soon");
}
function positive(){
    alert("Really glad to hear! Thank you for being with Us");
}
function comment(){
    alert("Leave your message please in the form below, we will contact you soon");
}

// form validations

// getting elements by id
const name=document.getElementById('name')
const phone=document.getElementById('phone')
const email =document.getElementById('email')

// form validation with proper alerts 
form.addEventListener('submit',(e)=>{
    if (name.value==""||phone.value==""||email.value==""){
        alert("Fill all the boxes!")
    }else{
        alert("Successfully submitted, Thank you!")
    }   
})


