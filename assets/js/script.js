// JQuery Code to handle nav bar button drop on mobile devices
$(document).on("click", function (e) {
    let  isMenuIconVisible = $(".fa-solid.fa-bars").is(":visible");
    // Perform actions only if the menu icon is visible
    if (isMenuIconVisible) {
        if (e.target !== $(".fa-solid.fa-bars")[0]) {
            $("nav").slideUp('slow');
        } else {
            $("nav").slideToggle('slow');
        }
    }
});


// Event Handling for the form submission including input validation and feedback
let form = document.getElementById("signup-form");
form.addEventListener("change", function (e) {
    let formData = e.target;
    let personalInfoMessage = document.getElementById("signup-personal-feedback")
    let newsletterMessage = document.getElementById("signup-newsletter-feedback")
    

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

    
})


// Event Listener to show message that we'll be in touch if the user leaves a question.
form.addEventListener("input", function (e) {
    let formData = e.target;
    let commentsMessage = document.getElementById("signup-comments-feedback");
    // Feedback for any further questions
    if(formData.name==="questions"){
        if(formData.value.trim().length>0){
            commentsMessage.innerText = "Thanks! We'll be in touch by email soon to answer your query!";
            commentsMessage.classList.remove("hide");
        } else{
            commentsMessage.classList.add("hide");
        }
    }
});


form.addEventListener("submit", function(e){
    e.target.submit();
})