

// Navbar Responsive Hamburger
const hamburger=document.querySelector(".hamburger");

//getting/adding the elemnts by their class name
const navbar=document.querySelector(".navbar");
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    navbar.classList.toggle("active")
})

// when clicked again, hiding the menu bar

document.querySelectorAll(".navbar a").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
}))



// form validation

// getting the elements by class name
const btn = document.querySelector(".register_btn");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirm = document.querySelector(".confirm")

// creating variable to push data to local storage
// if user next time wants to sign in

let data = [];

// btn click event

btn.addEventListener("click", (hey)=>{
    hey.preventDefault();

// checking if inputs are filled and passwords match

    if(username.value &&email.value &&password.value&&confirm.value){
        if(password.value==confirm.value) 
        { alert("Congrats, signed up!") 
       

            // pushing data to local storage
            data.push(username.value,email.value,password.value);
            localStorage.setItem("userData", JSON.stringify(data));
            window.location.href = "./products.html";
        } else alert("Passwords are not same");
    } else alert("Please, fill all the boxes!");
});
