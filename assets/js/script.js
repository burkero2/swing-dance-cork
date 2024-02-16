// JQuery Code to handle nav bar button drop on mobile devices
$(document).on("click", function (e) {
    if (e.target !== $(".fa-solid.fa-bars")[0]) {
        $("nav").slideUp('slow');
    } else {
        $("nav").slideToggle('slow');
    }
});


// Event Handling for the form submission including input validation and feedback
let form = document.getElementById("signup-form");
form.addEventListener("change", function (e) {
    let formData = e.target;
    let personalInfoMessage = document.getElementById("signup-personal-feedback")
    let newsletterMessage = document.getElementById("signup-newsletter-feedback")
    let commentsMessage = document.getElementById("signup-comments-feedback")

    // Feedback for the Personal Information Section
    if(formData.name==="name"){
        personalInfoMessage.classList.toggle("hide");
        if(!formData.value.trim().includes(" ")){
            personalInfoMessage.style.color="red";
            personalInfoMessage.innerText = "* Please leave your full name!"
        } else{
            personalInfoMessage.innerText = "";
        }
        
    }
    // Feedback for the newsletter section of the form
    if(formData.name==="newsletter"){
        
        if(formData.value==="yes"){
            newsletterMessage.classList.remove("hide");
            newsletterMessage.innerText = "Thanks! You have signed up to our newsletter!"
        } else if(formData.value==="already"){
            newsletterMessage.classList.remove("hide");
            newsletterMessage.innerText = "Great to hear! We'll be in touch!"
        } else{
            newsletterMessage.classList.add("hide");
            newsletterMessage.innerText ="";
        }
    }

    // Feedback for any further questions
    if(formData.name==="questions"){
        commentsMessage.classList.toggle("hide");
        if(formData.value.trim().length>0){
            commentsMessage.innerText = "Thanks! We'll be in touch by email soon to answer your query!"
        }
    }
})

form.addEventListener("submit", function(e){
    e.target.submit();
})