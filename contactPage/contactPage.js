// Navigation bar -- toggle button
const navToggleBtn = document.getElementsByClassName("main-nav__btn")[0];
const navLinks = document.getElementsByClassName("main-nav__items-container")[0];

navToggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



// Form validation
function validateForm() {

    let letters = /^[A-Za-z]+$/;

    // Grab elements
    let firstName = document.forms["contactForm"]["firstName"].value;
    let lastName = document.forms["contactForm"]["lastName"].value;
    let email = document.forms["contactForm"]["email"].value;
    let phone = document.forms["contactForm"]["phoneNumber"].value;
    let contactMethod = document.forms["contactForm"]["preferredContactMethod"];
    let checkbox = document.querySelector("input[name='checkbox']:checked");
    let comments = document.getElementById("form__comments").value;
    

    // Check if input for the firstName is empty or not
    if (firstName === "") {
        alert("Please enter your First Name!");
        document.contactForm.firstName.focus();
        return false;
    // Check if firstName value is letters only
    } if (!letters.test(firstName)) {
        alert("Please use letters for your First Name only!")
        document.contactForm.firstName.focus();
        return false;
    // Check if input for the lastName is empty or not
    } if (lastName === "") {
        alert("Please enter your Last Name!");
        document.contactForm.lastName.focus();
        return false;
    // Check if lastName value is letters only
    } if (!letters.test(lastName)) {
        alert("Please use letters for your Last Name only!")
        document.contactForm.lastName.focus();
        return false;
    // Check if input for email filed is empty or not
    } if (email === "") {
        alert("Please enter your Email!");
        document.contactForm.email.focus();
        return false;
    // Check if input for phone filed is empty or not
    } if (phone === "") {
        alert("Please enter your Phone number!");
        document.contactForm.phoneNumber.focus();
        return false;
    // Check if entered number value is numeric only
    } if (isNaN(phone)) {
        alert("Please use numbers only for your Phone number!")
        document.contactForm.phoneNumber.focus();
        return false;
    // Check if Preferred Contact Method radio btn has been selected
    } if ((contactMethod[0].checked === false) && (contactMethod[1].checked === false)) {
        alert("Please select Preferred Contact Method!");
        return false;
    // Check if at least one checkbox has been checked
    } if (!checkbox) {
        alert("Please check at least one checkbox for \"How did you hear about us?\"");
        return false;
    // Check comments input
    } if (comments === "") {
        alert("Please enter your comments!");
        document.contactForm.comments.focus();
        return false;
    // Notify the user the form has been submitted
    } else {
        alert("Thank you for contacting us! We will reach out back to you in the next 10 business days!")
    }
};
